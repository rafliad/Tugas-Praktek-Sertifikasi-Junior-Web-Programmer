<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Berita;

class BeritaController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Berita/Index', [
            'berita' => Berita::latest('tanggal')->paginate(10)
        ]);
    }
}
