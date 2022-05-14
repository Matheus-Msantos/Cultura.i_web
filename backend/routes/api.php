<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\AdvertController;




/*-- Route user e auth --*/
Route::group([ 'middleware' =>'auth:sanctum'], function(){

    Route::get('/cart/add/{product}', [CartsController::class, 'add']);
    Route::get('/cart/remove/{product}', [CartsController::class, 'remove']);
    Route::get('/cart', [CartsController::class, 'index']);

    Route::post('/order/add', [OrderItemController::class, 'add']);
    Route::get('/order', [OrderItemController::class, 'indexApi']);
    Route::get('/order/all', [OrderItemController::class, 'order']);
    Route::get('/order/item/{orderItem}', [OrderItemController::class, 'orderItem']);

    Route::get('/user', [UserController::class, 'index']);
    Route::get('/user/{user}', [UserController::class, 'showSingle']);
    Route::get('/user/show', [UserController::class, 'show']);
    Route::put('/user/{user}', [UserController::class, 'updateApi']);
    Route::delete('/user', [UserController::class, 'destroyApi']);

    Route::post('/advert', [AdvertController::class, 'storeApi']);
    Route::post('/product', [ProductController::class, 'storeApi']);


    Route::get('/producer/{producer}', [ProducerController::class, 'showApi']);
    Route::get('/advert/{advert}', [AdvertController::class, 'showApi']);
});


Route::post('/login', [UserController::class, 'login']);
Route::post('/user', [UserController::class, 'storeApi']);
Route::get('/user/logout', [UserController::class, 'logout']);

/*-- Route Product --*/
Route::get('/product', [ProductController::class, 'indexApi']);
Route::get('/product/{product}', [ProductController::class, 'show']);
Route::put('/product/{product}', [ProductController::class, 'updateApi']);
Route::delete('/product/{product}', [ProductController::class, 'destroyApi']);
Route::get('/product/category/{category}', [ProductController::class, 'category']);

/*-- Route Category --*/
Route::get('/category', [CategoryController::class, 'indexApi']);
Route::post('/category', [CategoryController::class, 'storeApi']);
Route::get('/category/{category}', [CategoryController::class, 'show']);
Route::put('/category/{category}', [CategoryController::class, 'updateApi']);
Route::delete('/category/{category}', [CategoryController::class, 'destroyApi']);


/*-- Route Address --*/
Route::get('/address', [AddressController::class, 'indexApi']);
Route::post('/address', [AddressController::class, 'storeApi']);
Route::get('/address/{address}', [AddressController::class, 'show']);
Route::put('/address/{address}', [AddressController::class, 'updateApi']);
Route::delete('/address/{address}', [AddressController::class, 'destroyApi']);



/*-- Route Advert --*/
Route::get('/advert', [AdvertController::class, 'indexApi']);

Route::get('/advert/{advert}', [AdvertController::class, 'showApi']);
Route::put('/advertiser/{advertiser}', [AdvertiserController::class, 'updateApi']);
