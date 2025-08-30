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
        return Inertia::render('Berita', [
            'daftarBerita' => Berita::latest('tanggal')->paginate(6)
        ]);
    }

    public function show(Berita $berita)
    {
        // Ambil 4 berita lain yang bukan berita saat ini
        $beritaLainnya = Berita::where('id', '!=', $berita->id)
            ->latest('tanggal')
            ->take(4)
            ->get();

        return Inertia::render('BeritaDetail', [
            'berita' => $berita,
            'beritaLainnya' => $beritaLainnya // Kirim data baru sebagai prop
        ]);
    }
}
