<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Kegiatan;

class KegiatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kegiatan::truncate();
        Kegiatan::create([
            'judul' => 'Prosesi Wisuda Saat Covid-19',
            'image' => 'kegiatan-wisuda.jpg'
        ]);
        Kegiatan::create([
            'judul' => 'Kegiatan Porak',
            'image' => 'kegiatan-porak.JPG'
        ]);
        Kegiatan::create([
            'judul' => 'Studi Lapangan ke Museum Geologi',
            'image' => 'kegiatan-geologi.jpg'
        ]);
        Kegiatan::create([
            'judul' => 'Kegiatan Kelas Hybrid saat Covid-19',
            'image' => 'kegiatan-kelas.jpg'
        ]);
        Kegiatan::create([
            'judul' => 'Latihan OSK',
            'image' => 'kegiatan-latihan-osk.png'
        ]);
        Kegiatan::create([
            'judul' => 'Psikotes Kelas 10',
            'image' => 'kegiatan-psikotes.png'
        ]);
    }
}
