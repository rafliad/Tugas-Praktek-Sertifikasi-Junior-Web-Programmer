import { Head, Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Card } from "@/Components/ui/card";

export default function Berita({ daftarBerita }) {
    return (
        <>
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Daftar Berita Terbaru
                </h1>

                <div className="space-y-6">
                    {daftarBerita.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                        >
                            <Link href={`/berita/${item.id}`}>
                                <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                    {item.judul}
                                </h2>
                            </Link>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Dipublikasikan pada: {item.tanggal}
                            </p>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">
                                {item.ringkasan}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

Berita.layout = (page) => <MainLayout children={page} title="Berita" />;
