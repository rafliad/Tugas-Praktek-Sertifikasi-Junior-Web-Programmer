// resources/js/Pages/Berita.jsx

import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

// Terima prop 'daftarBerita' yang dikirim dari controller
export default function Berita({ daftarBerita }) {
    return (
        <>
            {/* Konten ini akan dibungkus oleh MainLayout */}
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Daftar Berita Terbaru
                </h1>

                {/* Kita akan melakukan looping pada data 'daftarBerita' */}
                <div className="space-y-6">
                    {daftarBerita.map((item) => (
                        // 'key' sangat penting untuk performa React saat me-render list
                        <div
                            key={item.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                                {item.judul}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Dipublikasikan pada: {item.tanggal}
                            </p>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">
                                {item.ringkasan}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

// Terapkan layout utama ke halaman ini
Berita.layout = (page) => <MainLayout children={page} title="Berita" />;
