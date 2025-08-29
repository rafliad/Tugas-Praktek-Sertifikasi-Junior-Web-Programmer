<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\PesanKontakBaru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
        $validatedData = $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'pesan' => 'required|string|min:10',
        ]);

        Mail::to('admin@sman5bandung.test')->send(new PesanKontakBaru($validatedData));

        return Redirect::route('kontak')->with('success', 'Pesan Anda telah berhasil terkirim!');
    }
}
