<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Berita;

class BeritaController extends Controller
{
    public function index()
    {
        $berita = Berita::latest('tanggal')->get();
        return Inertia::render('Berita', [
            'daftarBerita' => $berita
        ]);
    }

    public function show(Berita $berita)
    {
        return Inertia::render('BeritaDetail', [
            'berita' => $berita
        ]);
    }
}
