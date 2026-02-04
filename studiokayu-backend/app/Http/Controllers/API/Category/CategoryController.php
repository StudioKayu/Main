<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Auth\Events\Validate ;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    //untuk Bagian Manggill Data
    public function index(){
        return response()->json([
            'status' => 'succes',
            'data' => Category::all()
        ]);
    }
    // untuk bisa mencari poroduct 
    public function show($id){
        $category = Category::with('products')->find($id);

        if (!$category){
            return response()->json([
                'status' => 'data Tidak Ditemukan ',404
            ]);
        }
    }
    public function store(Request $request)
{
    // Gunakan method validate() langsung dari objek $request
    $validatedData = $request->validate([
        'name' => 'required|string|unique:categories,name'
    ]);

    // Simpan data yang sudah divalidasi
    $category = Category::create($validatedData);

    return response()->json([
        'status' => 'success',
        'data' => $category
    ], 201);
}
}
