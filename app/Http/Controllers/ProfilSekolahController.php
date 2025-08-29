<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ProfilSekolahController extends Controller
{
    public function index()
    {
        // Kita akan kirimkan juga prop 'canLogin' dan 'canRegister'
        // agar link Login/Register di pojok kanan atas tetap muncul.
        return Inertia::render('ProfilSekolah', [
            'canLogin' => \Illuminate\Support\Facades\Route::has('login'),
            'canRegister' => \Illuminate\Support\Facades\Route::has('register'),
        ]);
    }
}
