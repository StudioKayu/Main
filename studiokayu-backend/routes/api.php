<?php

use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\Category\CategoryController;
use App\Http\Controllers\API\Inventory\InventoryController;
use App\Http\Controllers\API\Review\ReviewController;
use App\Http\Controllers\API\Product\ProductController;
use App\Http\Controllers\API\Order\OrderController;
use App\Http\Controllers\API\Order\OrderItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//,login dan register
Route::post('/register',[AuthController::class , 'register']);
Route::post('/login',[AuthController::class , 'login']);

//Category 
 Route::get('/categories',[CategoryController::class, 'index']);
 Route::get('/categories/{id}', [CategoryController::class,'show']);
 Route::post('/categories', [CategoryController::class,'store']);

 //Inventory

Route::get('/inventories', [InventoryController::class ,'index']);
Route::post('/inventories', [InventoryController::class,'store']);
Route::delete('inventories/{id}', [InventoryController::class, 'destroy']);

//Review

Route::post('/reviews', [ReviewController::class, 'store']);
Route::get('/reviews/product/{productId}', [ReviewController::class, 'getByProduct']);
Route::delete('/reviews/{id}', [ReviewController::class, 'destroy']);

//Product
Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

//Order

Route::post('/orders', [OrderController::class, 'store']);
Route::get('/orders', [OrderController::class, 'index']);

//Order Item
Route::post('/order-items', [OrderItemController::class, 'store']);