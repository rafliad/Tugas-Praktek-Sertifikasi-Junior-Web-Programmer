<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKontakRequest;
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
    public function store(StoreKontakRequest $request)
    {
        Mail::to('admin@sman5bandung.test')->send(new PesanKontakBaru($request->validated()));
        return Redirect::route('kontak')->with('success', 'Pesan Anda telah berhasil terkirim!');
    }
}
