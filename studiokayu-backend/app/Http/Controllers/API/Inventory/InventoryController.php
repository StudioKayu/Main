<?php

namespace App\Http\Controllers\API\Inventory;

use App\Http\Controllers\Controller;
use App\Models\Inventory;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class InventoryController extends Controller
{
    /**
     * Menampilkan semua daftar inventaris.
     */
    public function index(): JsonResponse
    {
        $inventory = Inventory::all();
        return response()->json([
            'status' => 'success',
            'data' => $inventory
        ]);
    }

    /**
     * Menyimpan data stok baru.
     */
    public function store(Request $request): JsonResponse
    {
        // 1. Validasi format (Cukup pakai integer)
        $validator = Validator::make($request->all(), [
            'inventory_id' => 'required|integer',
            'location' => 'required|string',
            'quantity' => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // 2. LOGIKA PENGECEKAN: Cek apakah product_id ini sudah terdaftar
        $sudahAda = Inventory::where('inventory_id', $request->product_id)->exists();

        if ($sudahAda) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal! Product ID ' . $request->product_id . ' sudah ada di inventaris.'
            ], 409); // 409 artinya Conflict/Duplikat
        }

        // 3. Jika belum ada, baru simpan
        $inventory = Inventory::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil disimpan!',
            'data' => $inventory
        ], 201);
    }
    /**
     * Update lokasi atau jumlah stok secara manual.
     */
    public function update(Request $request, $id): JsonResponse
    {
        $inventory = Inventory::find($id);

        if (!$inventory) {
            return response()->json(['message' => 'Data inventaris tidak ditemukan'], 404);
        }

        $inventory->update($request->only(['location', 'quantity']));

        return response()->json([
            'status' => 'success',
            'message' => 'Data inventaris berhasil diperbarui',
            'data' => $inventory
        ]);
    }

    /**
     * Menghapus data inventaris.
     */
    public function destroy($id): JsonResponse
{
    // Cari berdasarkan kolom inventory_id, bukan ID primary key
    $inventory = Inventory::where('inventory_id', $id)->first();

    if (!$inventory) {
        return response()->json([
            'status' => 'error',
            'message' => 'Data dengan Inventory ID ' . $id . ' tidak ditemukan'
        ], 404);
    }

    $inventory->delete();

    return response()->json([
        'status' => 'success',
        'message' => 'Data inventaris berhasil dihapus'
    ]);
}
}