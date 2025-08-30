<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Berita;
use App\Http\Requests\Admin\StoreBeritaRequest;
use App\Http\Requests\Admin\UpdateBeritaRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

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
    public function edit(Berita $berita)
    {
        return Inertia::render('Admin/Berita/Edit', [
            'berita' => $berita
        ]);
    }

    public function update(UpdateBeritaRequest $request, Berita $berita)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($berita->image) {
                Storage::delete('public/images/berita/' . $berita->image);
            }
            // Simpan gambar baru
            $imageName = date('YmdHis') . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->storeAs('public/images/berita', $imageName);
            $data['image'] = $imageName;
        }

        $berita->update($data);

        return Redirect::route('admin.berita.index')->with('success', 'Berita berhasil diperbarui.');
    }
}
