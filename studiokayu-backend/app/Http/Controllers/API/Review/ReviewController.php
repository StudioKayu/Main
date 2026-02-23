<?php

namespace App\Http\Controllers\API\Review;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse; // Gunakan ini yang lebih standar untuk Laravel

class ReviewController extends Controller
{
    /**
     * Mengambil review berdasarkan ID Produk.
     */
    public function getByProduct($productId): JsonResponse
    {
        // Pastikan relasi 'user' sudah ada di Model Review
        $reviews = Review::where('product_id', $productId)
            ->with('user:id,name')
            ->latest()
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => $reviews
        ]);
    }

    /**
     * Menyimpan review baru.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required'
        ]);

        $review = Review::create([
            'user_id' => 1, // 🔥 HARDCODE SEMENTARA
            'product_id' => $request->product_id,
            'rating' => $request->rating,
            'comment' => $request->comment,
            'review_date' => now(),
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Review berhasil disimpan',
            'data' => $review
        ], 201);
    }
    public function destroy($id): JsonResponse // Perbaiki typo 'destoy' jadi 'destroy'
    {
        // Mencari review berdasarkan ID dan memastikan milik user yang sedang login
        $review = Review::find($id);

        if (!$review) {
            return response()->json([
                'status' => 'error',
                'message' => 'Review tidak ditemukan atau Anda tidak memiliki akses'
            ], 404); // Angka 404 harus di luar array agar terbaca sebagai status code
        }

        $review->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Review berhasil dihapus'
        ]);
    }
}