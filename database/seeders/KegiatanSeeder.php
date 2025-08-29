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
        Kegiatan::create([
            'judul' => 'Latihan OSK',
            'image' => 'kegiatan-latihan-osk.png'
        ]);
        Kegiatan::create([
            'judul' => 'Kegiatan Porak',
            'image' => 'kegiatan-porak.JPG'
        ]);
        Kegiatan::create([
            'judul' => 'Psikotes Kelas 10',
            'image' => 'kegiatan-psikotes.png'
        ]);
    }
}
