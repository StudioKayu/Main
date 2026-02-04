<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    // 1. Ambil semua data produk
    public function index()
    {
        $products = Product::all(); // Kamu bisa tambah ::with('category') jika sudah buat relasinya
        return response()->json([
            'status' => 'success',
            'data' => $products
        ]);
    }

    // 2. Simpan produk baru (Biasanya dilakukan Admin)
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|string|max:255',
            'price'       => 'required|numeric',
            'dimension'   => 'required|string',
            'material'    => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $product = Product::create($request->all());

        return response()->json([
            'status' => 'product created successfully',
            'data' => $product
        ], 201);
    }

    // 3. Lihat detail satu produk
    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

    // 4. Update data produk
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if (!$product) return response()->json(['message' => 'Not found'], 404);

        $product->update($request->all());

        return response()->json([
            'status' => 'updated',
            'data' => $product
        ]);
    }

    // 5. Hapus produk
    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) return response()->json(['message' => 'Not found'], 404);

        $product->delete();
        return response()->json(['message' => 'Product deleted']);
    }
}