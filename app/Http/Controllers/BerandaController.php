<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Berita;
use App\Models\Kegiatan;

class BerandaController extends Controller
{
    public function index()
    {
        return Inertia::render('Beranda', [
            'canLogin' => \Illuminate\Support\Facades\Route::has('login'),
            'canRegister' => \Illuminate\Support\Facades\Route::has('register'),
            'beritaTerbaru' => Berita::latest('tanggal')->take(3)->get(),
            'kegiatanTerbaru' => Kegiatan::latest()->take(3)->get(),
        ]);
    }
}
