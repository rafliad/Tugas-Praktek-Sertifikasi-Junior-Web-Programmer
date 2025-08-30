<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Berita;

class BeritaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Berita::truncate();
        Berita::create([
            'judul' => 'SMAN 5 Bandung Juara 1 Lomba Cerdas Cermat Nasional',
            'tanggal' => '2025-08-25',
            'ringkasan' => 'Tim cerdas cermat SMAN 5 Bandung berhasil meraih prestasi gemilang dengan menjuarai Lomba Cerdas Cermat tingkat nasional...'
        ]);

        Berita::create([
            'judul' => 'Kegiatan Bakti Sosial Sukses Digelar di Panti Asuhan',
            'tanggal' => '2025-08-22',
            'ringkasan' => 'OSIS SMAN 5 Bandung telah sukses menyelenggarakan kegiatan bakti sosial tahunan yang kali ini berlokasi di Panti Asuhan Harapan Bunda...'
        ]);

        Berita::create([
            'judul' => 'Pendaftaran Peserta Didik Baru (PPDB) Telah Dibuka',
            'tanggal' => '2025-08-19',
            'ringkasan' => 'SMAN 5 Bandung secara resmi membuka Pendaftaran Peserta Didik Baru (PPDB) untuk tahun ajaran yang akan datang. Pendaftaran dibuka secara online...'
        ]);
        Berita::create([
            'judul' => 'Siswa SMAN 5 Raih Medali Emas di Olimpiade Sains Provinsi',
            'tanggal' => '2025-08-15',
            'ringkasan' => 'Kabar membanggakan datang dari siswa kami, Budi Santoso, yang berhasil membawa pulang medali emas dalam ajang Olimpiade Sains tingkat provinsi Jawa Barat.'
        ]);

        Berita::create([
            'judul' => 'Renovasi Perpustakaan Sekolah Telah Selesai',
            'tanggal' => '2025-08-10',
            'ringkasan' => 'Perpustakaan SMAN 5 Bandung kini tampil dengan wajah baru yang lebih modern dan nyaman untuk mendukung kegiatan literasi siswa.'
        ]);
    }
}
