<?php

use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\GuestController;
use App\Http\Controllers\Api\v1\ModuleController;
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

    Route::middleware('web')->get('/sanctum/csrf-cookie', function (Request $request) {
        // Get the CSRF token
        $csrfToken = csrf_token();

        // Return the CSRF token in the response
        return response()->json(['csrf_token' => $csrfToken]);
    });
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

        Route::controller(GuestController::class)->prefix('guest')->name('guest.')->group(function () {
            Route::post('/login', 'userLogin');
            Route::post('/register', 'userRegister');
            Route::get('/roles', 'userRolesDropDown');
        });
    });

    Route::middleware(['auth:sanctum'])->prefix('afterlogin')->group(function () {
        Route::controller(AuthController::class)->prefix('auth')->name('auth.')->group(function () {
            Route::get('/me', 'me');
            Route::post('/update', 'userUpdate');
            Route::post('/changepassword', 'passwordChange');
            Route::get('/role-access', 'roleAccess');
        });
        Route::controller(ModuleController::class)->prefix('module')->name('module.')->group(function () {
            Route::get('/list', 'list');
        });
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
