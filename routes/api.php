<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
 */

Route::prefix('auth')->group(function () {
    Route::post('/login', [UserController::class, 'userLoginController']);
    Route::post('/register', [UserController::class, 'userRegisterController']);
});

// Routes under the 'admin'

Route::post('/getSlug', function (Request $request) {
    $slug = '';
    if (!empty($request->title)) {
        $slug = Str::slug($request->title);
    }
    return response()->json([
        'status' => true,
        'slug' => $slug,
    ]);
});

Route::middleware('auth:sanctum')->group(function () {
    // Routes under the 'admin'
    // Route::prefix('category')->group(function () {
    //     Route::post('/store', [CategoryController::class, 'store']);
    //     Route::post('/view', [CategoryController::class, 'index']);
    //     Route::get('/options', [CategoryController::class, 'categoryDropdown']);
    //     Route::post('/{id}', [CategoryController::class, 'detail']);
    //     Route::put('/update/{id}', [CategoryController::class, 'update']);
    //     Route::delete('/delete/{id}', [CategoryController::class, 'delete']);
    // });
    // Routes under the 'frontends'

});
