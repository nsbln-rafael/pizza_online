<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/pizzas', 'Pizzas\Index');
Route::get('/orders', 'Orders\Index');
Route::post('/orders', 'Orders\Create');
Route::get('/currencies', 'Currencies\Index');
Route::post('/login', 'Auth\Login');
Route::post('/register', 'Auth\Register');
Route::middleware('auth:api')->post('/logout', 'Auth\Logout');
