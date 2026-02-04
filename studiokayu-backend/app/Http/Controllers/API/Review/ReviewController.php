<?php

namespace App\Http\Controllers\Api\Review;

use App\Http\Controllers\Controller;
use App\Models\Review;
use GrahamCampbell\ResultType\Success;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class ReviewController extends Controller
{ 
    //untuk mencari product
    public function getByProduct($productId){
        $reviews =  Review::where('productId')
                    ->with('user:id,name')
                    ->latest
                    ->get();
        return response()->json([
            'status' => 'succes',
            'data' => $reviews
        ]);
    }
    public function store(Request $request): JsonResponse{
        //validasi input
        $request->validate([
            'product_id' => 'required|exits:products,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required'
        ]);
        $reviews = Review::create([
            'user_id' =>auth()->id(),
            'product_id' => $request->product_id,
            'rating' => $request->rating,
            'comment' => $request->comment,
            'reviewdate' => now(),
        ]);
        return response()->json([
            'status' => 'success',
            'massage' => 'Terimakasih atas ulasan anda',
            'data' => $reviews
        ],201);
    }
    public function destoy($id): JsonResponse{
        $reviews = Review::where('id', $id)->where('user_id', auth()->id())->first();
        
        if(!$reviews){
            return response()->json([
                'massage' => 'Review Tidak Ditemukan',404
            ]);
        }
        $reviews->delete();
        return response()->json(['massage' =>'Reviews Berhasil Di Hapus']);
    }
}
