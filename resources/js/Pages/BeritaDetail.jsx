import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Card } from "@/Components/ui/card";

export default function BeritaDetail({ berita }) {
    return (
        <>
            <div className="container mx-auto py-12 px-6">
                <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                    <h1 className="text-4xl font-bold mb-4">{berita.judul}</h1>

                    <p className="text-md text-gray-500 dark:text-gray-400 mb-6">
                        Dipublikasikan pada:{" "}
                        {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>

                    <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
                        {berita.ringkasan}
                    </div>

                    <div className="mt-8">
                        <Link
                            href={route("berita.index")}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            &larr; Kembali ke Daftar Berita
                        </Link>
                    </div>
                </Card>
            </div>
        </>
    );
}

BeritaDetail.layout = (page) => (
    <MainLayout children={page} title={page.props.berita.judul} />
);
