<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class Orderitemcontroller extends Controller
{
    /**
     * Store item-item ke dalam pesanan.
     * Biasanya fungsi ini digabung di OrderController, 
     * tapi ini adalah versi jika kamu ingin memisahnya.
     */
    public function store(Request $request): JsonResponse
    {
        // 1. Validasi input
        $request->validate([
            'order_id' => 'required|exists:orders,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        try {
            $product = Product::findOrFail($request->product_id);
            
            // 2. Hitung subtotal
            $subtotal = $product->price * $request->quantity;

            // 3. Simpan data
            $orderItem = OrderItem::create([
                'order_id' => $request->order_id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
                'subtotal' => $subtotal, // Sesuai dengan model OrderItem kamu
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Item berhasil ditambahkan ke pesanan',
                'data' => $orderItem
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}