<?php

use App\Http\Controllers\AuthController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function(){
    // Route::post('/login', [AuthController::class, 'login']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json([
        'user' => $request->user()
    ]);
});

// Public Routes
Route::post('/register' , [AuthController::class , 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout' , [AuthController::class , 'logout']);