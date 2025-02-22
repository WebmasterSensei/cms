<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('users')->name('users.')->group(function (){
        Route::get('users-index', [UserController::class, 'index'])->name('index');
        Route::post('users-create', [UserController::class, 'createUsers'])->name('create');
        Route::get('users-details-{id}', [UserController::class, 'getUser'])->name('user');
        Route::put('users-update', [UserController::class, 'updateUser'])->name('update');
        Route::delete('users-delete-{id}', [UserController::class, 'deleteUser'])->name('delete');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

