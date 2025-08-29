<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function index()
    {
        // Di dunia nyata, data ini akan diambil dari database.
        // Untuk sekarang, kita buat data "dummy" berupa array.
        $berita = [
            [
                'id' => 1,
                'judul' => 'SMAN 5 Bandung Juara 1 Lomba Cerdas Cermat Nasional',
                'tanggal' => '25 Agustus 2025',
                'ringkasan' => 'Tim cerdas cermat SMAN 5 Bandung berhasil meraih prestasi gemilang dengan menjuarai Lomba Cerdas Cermat tingkat nasional...'
            ],
            [
                'id' => 2,
                'judul' => 'Kegiatan Bakti Sosial Sukses Digelar di Panti Asuhan',
                'tanggal' => '22 Agustus 2025',
                'ringkasan' => 'OSIS SMAN 5 Bandung telah sukses menyelenggarakan kegiatan bakti sosial tahunan yang kali ini berlokasi di Panti Asuhan Harapan Bunda...'
            ],
            [
                'id' => 3,
                'judul' => 'Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 Telah Dibuka',
                'tanggal' => '19 Agustus 2025',
                'ringkasan' => 'SMAN 5 Bandung secara resmi membuka Pendaftaran Peserta Didik Baru (PPDB) untuk tahun ajaran yang akan datang. Pendaftaran dibuka secara online...'
            ],
        ];

        // Kirim data 'berita' ke komponen React dengan nama prop 'daftarBerita'
        return Inertia::render('Berita', [
            'daftarBerita' => $berita
        ]);
    }
}
