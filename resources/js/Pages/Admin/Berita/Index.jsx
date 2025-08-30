import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/Card";
import { Button } from "@/Components/ui/Button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/Table";

const PaginationLink = ({ active, label, url }) => {
    if (!url)
        return (
            <span
                className="px-3 py-1 text-gray-400"
                dangerouslySetInnerHTML={{ __html: label }}
            />
        );
    return (
        <Link
            href={url}
            className={`px-3 py-1 border rounded-md text-sm ${
                active
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            dangerouslySetInnerHTML={{ __html: label }}
        />
    );
};

export default function Index({ berita }) {
    return (
        <>
            <Head title="Kelola Berita" />
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Daftar Berita</CardTitle>
                        <Button asChild>
                            <Link href="#">Tambah Berita Baru</Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">No</TableHead>
                                <TableHead>Judul</TableHead>
                                <TableHead>Tanggal Publikasi</TableHead>
                                <TableHead className="text-right">
                                    Aksi
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {berita.data.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>{berita.from + index}</TableCell>
                                    <TableCell>{item.judul}</TableCell>
                                    <TableCell>
                                        {new Date(
                                            item.tanggal
                                        ).toLocaleDateString("id-ID", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="mr-2"
                                        >
                                            <Link href="#">Edit</Link>
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            asChild
                                        >
                                            <Link href="#">Hapus</Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Navigasi Paginasi */}
                    <div className="mt-6 flex justify-center items-center space-x-1">
                        {berita.links.map((link, index) => (
                            <PaginationLink
                                key={index}
                                active={link.active}
                                label={link.label}
                                url={link.url}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

Index.layout = (page) => <AdminLayout children={page} />;
