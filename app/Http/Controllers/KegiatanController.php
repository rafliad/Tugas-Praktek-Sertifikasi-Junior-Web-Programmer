<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Kegiatan;

class KegiatanController extends Controller
{
    public function index()
    {
        return Inertia::render('Kegiatan', [
            'daftarKegiatan' => Kegiatan::latest()->get()
        ]);
    }
}
