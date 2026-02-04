<?php

namespace App\Http\Controllers\API;

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
        $validator = Validator::make($request->all(), [
            'inventory_id' => 'required|string|unique:inventories',
            'location'     => 'required|string',
            'quantity'     => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $inventory = Inventory::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Stok berhasil ditambahkan ke inventaris',
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
        $inventory = Inventory::find($id);

        if (!$inventory) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        $inventory->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Data inventaris berhasil dihapus'
        ]);
    }
}