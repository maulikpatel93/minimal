<?php

use App\Http\Controllers\Api\v1\UserController;
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

Route::prefix('v1')->group(function () {
    // Route::controller(CommonApiController::class)->prefix('common')->name('common.')->group(function () {
    //     Route::get('/downloadFile', 'downloadFile');
    //     Route::post('/sampleclientexport', 'sampleclientexport');
    //     Route::post('/sampleclientnoteexport', 'sampleclientnoteexport');
    //     Route::post('/sampleclientvoucherexport', 'sampleclientvoucherexport');
    //     Route::post('/sampleproductexport', 'sampleproductexport');
    //     Route::post('/timezone', 'timezone');
    //     Route::post('/whentosend', 'whentosend');
    //     Route::post('/checkuser', 'checkuser');
    // });

    Route::middleware(['guest:sanctum'])->prefix('beforelogin')->group(function () {
        // Route::controller(SalonsApiController::class)->prefix('salons')->name('salons.')->group(function () {
        //     Route::post('/checkexist', 'checkexist');
        //     Route::post('/isexist', 'isexist');
        //     Route::post('/store', 'store');
        //     Route::post('/update/{id}', 'update');
        // });
        // Route::post('/forgotpassword', [GuestApiController::class, 'forgotpassword']);
        // Route::post('/forgotpasswordsalonoptions', [GuestApiController::class, 'forgotpasswordsalonoptions']);
        // Route::post('/salonoptions', [GuestApiController::class, 'salonoptions']);
        // Route::post('/twofactorlogin', [GuestApiController::class, 'twofactorlogin']);

        Route::post('/login', [UserController::class, 'userLogin']);
        Route::post('/register', [UserController::class, 'userRegister']);
        Route::post('/roles', [UserController::class, 'userRolesDropDown']);
    });

    Route::middleware(['auth:sanctum'])->prefix('afterlogin')->group(function () {
        
    });
});

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

