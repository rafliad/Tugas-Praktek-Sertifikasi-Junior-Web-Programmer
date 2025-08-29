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
        // 2. Ganti seluruh array "dummy" dengan satu baris ini
        $berita = Berita::latest('tanggal')->get();

        // Baris di bawah ini tetap sama persis!
        return Inertia::render('Berita', [
            'daftarBerita' => $berita
        ]);
    }
}
