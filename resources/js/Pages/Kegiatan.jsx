import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Card } from "@/Components/ui/card";

export default function Kegiatan({ daftarKegiatan }) {
    return (
        <>
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Galeri Kegiatan
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {daftarKegiatan.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={`/images/kegiatan/${item.image}`}
                                alt={item.judul}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-center">
                                    {item.judul}
                                </h3>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

Kegiatan.layout = (page) => (
    <MainLayout children={page} title="Galeri Kegiatan" />
);
