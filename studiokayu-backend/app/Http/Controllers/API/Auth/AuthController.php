<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Client\Events\ResponseReceived;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; // Import ini di atas
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{

public function register(Request $request)
{
    // Validate request data
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|unique:users',
        'password' => 'required|string|min:8',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    // Create the user and encrypt password
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    // Generate Sanctum token
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'user' => $user,
        'access_token' => $token,
        'token_type' => 'Bearer',
    ], 201);
}
public function login(Request $request)
{
    // 1. Validasi input: Email harus ada di tabel users, password wajib diisi
    $validator = Validator::make($request->all(), [
        'email' => 'required|string|email',
        'password' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    // 2. Cari user berdasarkan email
    $user = User::where('email', $request->email)->first();

    // 3. Cek apakah user ada DAN password-nya cocok
    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json([
            'status' => 'error',
            'message' => 'Email atau password salah.'
        ], 401);
    }

    // 4. Hapus token lama (opsional, agar satu user cuma punya satu token aktif)
    $user->tokens()->delete();

    // 5. Generate token baru
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'status' => 'success',
        'message' => 'Login berhasil',
        'user' => $user,
        'access_token' => $token,
        'token_type' => 'Bearer',
    ], 200);
}
}