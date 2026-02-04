<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validasi input: Harus ada array 'items' yang berisi product_id dan quantity
        $request->validate([
            'items' => 'required|array',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        try {
            // 2. Gunakan Transaction agar jika satu gagal, semua batal (aman untuk stok & uang)
            $order = DB::transaction(function () use ($request) {
                
                // Buat data Order (Kepala Pesanan)
                $order = Order::create([
                    'order_id' => 'INV-' . strtoupper(Str::random(10)),
                    'order_date' => now(),
                    'status' => 'pending',
                    'total_price' => 0, // Akan dihitung di bawah
                    'user_id' => auth()->id() ?? 1 // Gunakan ID user login, default ke 1 jika test
                ]);

                $totalPrice = 0;

                // 3. Looping barang yang dibeli untuk dimasukkan ke OrderItem
                foreach ($request->items as $item) {
                    $product = Product::findOrFail($item['product_id']);
                    $subtotal = $product->price * $item['quantity'];
                    
                    OrderItem::create([
                        'order_id' => $order->id,
                        'product_id' => $product->id,
                        'quantity' => $item['quantity'],
                        'price' => $product->price, // Simpan harga saat transaksi
                    ]);

                    $totalPrice += $subtotal;

                    // Opsional: Jika ingin kurangi stok produk otomatis
                    // $product->decrement('stock', $item['quantity']);
                }

                // 4. Update total_price yang sebenarnya ke tabel Order
                $order->update(['total_price' => $totalPrice]);

                return $order;
            });

            return response()->json([
                'status' => 'success',
                'message' => 'Pesanan StudioKayu berhasil diproses!',
                'data' => $order->load('items.product') // Menampilkan hasil beserta detail barang
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Terjadi kesalahan: ' . $e->getMessage()
            ], 500);
        }
    }

    // Fungsi untuk melihat riwayat pesanan (Index)
    public function index()
    {
        $orders = Order::with('items.product')->get();
        return response()->json([
            'status' => 'success',
            'data' => $orders
        ]);
    }
}