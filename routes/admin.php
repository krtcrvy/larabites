<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified', 'role:admin'])->name('admin.dashboard');
