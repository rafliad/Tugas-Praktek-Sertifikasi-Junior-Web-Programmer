import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/Card";
import { Button } from "@/Components/ui/Button";

const PaginationLink = ({ active, label, url }) => {
    if (!url) {
        return (
            <span
                className="px-4 py-2 border rounded-md"
                dangerouslySetInnerHTML={{ __html: label }}
            />
        );
    }

    return (
        <Link
            href={url}
            className={`px-4 py-2 border rounded-md ${
                active
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            dangerouslySetInnerHTML={{ __html: label }}
        />
    );
};

export default function Berita({ daftarBerita }) {
    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-10">
                Berita & Informasi
            </h1>

            {/* Layout Grid untuk daftar berita */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {daftarBerita.data.map((item) => (
                    <Card key={item.id} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="line-clamp-2 h-14">
                                {item.judul}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                {new Date(item.tanggal).toLocaleDateString(
                                    "id-ID",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </p>
                            <p className="line-clamp-4 text-gray-600 dark:text-gray-400">
                                {item.ringkasan}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                asChild
                                variant="secondary"
                                className="w-full"
                            >
                                <Link href={route("berita.show", item)}>
                                    Baca Selengkapnya
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Navigasi Paginasi */}
            <div className="mt-12 flex justify-center items-center space-x-2">
                {daftarBerita.links.map((link, index) => (
                    <PaginationLink
                        key={index}
                        active={link.active}
                        label={link.label}
                        url={link.url}
                    />
                ))}
            </div>
        </div>
    );
}

Berita.layout = (page) => <MainLayout children={page} title="Berita" />;
