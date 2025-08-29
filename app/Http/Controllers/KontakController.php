<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class KontakController extends Controller
{
    public function index()
    {
        return Inertia::render('Kontak');
    }

    // Method untuk memproses data dari formulir
    public function store(Request $request)
    {
        // 1. Validasi data yang masuk
        $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'pesan' => 'required|string|min:10',
        ]);

        // 2. Jika validasi berhasil, lakukan sesuatu dengan data
        //    Contoh: Simpan ke database atau kirim email
        //    Untuk saat ini, kita lewati dulu bagian ini.
        //    $data = $request->all();
        //    Mail::to('admin@sekolah.com')->send(new PesanBaru($data));

        // 3. Kembalikan ke halaman kontak dengan pesan sukses
        return Redirect::route('kontak')->with('success', 'Pesan Anda telah berhasil terkirim!');
    }
}
