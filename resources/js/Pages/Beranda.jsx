import { Head, Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/Card";
import { Button } from "@/Components/ui/Button";

export default function Beranda({ beritaTerbaru, kegiatanTerbaru }) {
    return (
        <>
            {/* Bagian Hero/Sambutan Utama */}
            <div className="bg-white dark:bg-gray-800 py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Selamat Datang di Website SMAN 5 Bandung
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Pusat Informasi dan Kegiatan Terkini dari Sekolah Kami.
                    </p>
                    <Button asChild size="lg">
                        <Link href={route("tentang-kami")}>
                            Pelajari Lebih Lanjut
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="container mx-auto py-12 px-6 space-y-12">
                {/* Bagian Berita Terbaru */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Berita Terbaru
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {beritaTerbaru.map((berita) => (
                            <Card key={berita.id}>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2 h-14">
                                        {berita.judul}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                                        {berita.ringkasan}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        asChild
                                        variant="secondary"
                                        className="w-full"
                                    >
                                        <Link
                                            href={route("berita.show", berita)}
                                        >
                                            Baca Selengkapnya
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild variant="outline">
                            <Link href={route("berita.index")}>
                                Lihat Semua Berita
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Bagian Kegiatan Terbaru */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Kegiatan Terbaru
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {kegiatanTerbaru.map((kegiatan) => (
                            <Card key={kegiatan.id} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <img
                                        src={`/images/kegiatan/${kegiatan.image}`}
                                        alt={kegiatan.judul}
                                        className="w-full h-48 object-cover"
                                    />
                                </CardContent>
                                <CardFooter className="p-4 justify-center">
                                    <h3 className="font-semibold">
                                        {kegiatan.judul}
                                    </h3>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild variant="outline">
                            <Link href={route("kegiatan")}>
                                Lihat Galeri Lengkap
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}

Beranda.layout = (page) => <MainLayout children={page} title="Beranda" />;
