<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Berita;
use App\Http\Requests\Admin\StoreBeritaRequest;
use Illuminate\Support\Facades\Redirect;

class BeritaController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Berita/Index', [
            'berita' => Berita::latest('tanggal')->paginate(10)
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Berita/Create');
    }

    public function store(StoreBeritaRequest $request)
    {
        $imageName = null;
        if ($request->hasFile('image')) {
            $imageName = date('YmdHis') . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->storeAs('public/images/berita', $imageName);
        }
        $data = array_merge($request->validated(), ['image' => $imageName]);
        Berita::create($data);
        return Redirect::route('admin.berita.index')->with('success', 'Berita baru berhasil ditambahkan.');
    }
}
