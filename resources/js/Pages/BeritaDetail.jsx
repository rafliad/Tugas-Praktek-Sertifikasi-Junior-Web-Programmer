import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/Card";

export default function BeritaDetail({ berita, beritaLainnya }) {
    return (
        <div className="container mx-auto py-12 px-6">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Kolom Konten Utama (2/3 Lebar) */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                    <article className="prose dark:prose-invert max-w-none">
                        <p className="text-md text-gray-500 dark:text-gray-400">
                            Dipublikasikan pada:{" "}
                            {new Date(berita.tanggal).toLocaleDateString(
                                "id-ID",
                                {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </p>
                        <h1 className="mt-2">{berita.judul}</h1>
                        <p className="text-lg leading-relaxed">
                            {berita.ringkasan}
                        </p>
                    </article>
                    <div className="mt-8 border-t pt-4">
                        <Link
                            href={route("berita.index")}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            &larr; Kembali ke Semua Berita
                        </Link>
                    </div>
                </div>

                {/* Kolom Sidebar (1/3 Lebar) */}
                <aside className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Berita Lainnya</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {beritaLainnya.map((item) => (
                                    <li
                                        key={item.id}
                                        className="border-b pb-4 last:border-b-0 last:pb-0"
                                    >
                                        <Link
                                            href={route("berita.show", item)}
                                            className="font-semibold hover:text-blue-500 block"
                                        >
                                            {item.judul}
                                        </Link>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {new Date(
                                                item.tanggal
                                            ).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    );
}

BeritaDetail.layout = (page) => (
    <MainLayout children={page} title={page.props.berita.judul} />
);
