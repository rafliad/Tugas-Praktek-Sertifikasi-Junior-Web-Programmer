// resources/js/Pages/Admin/Berita/Create.jsx

import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/Card";
import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";
import { Label } from "@/Components/ui/Label";
import { Textarea } from "@/Components/ui/Textarea";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        judul: "",
        tanggal: "",
        ringkasan: "",
        image: null, // Initial state untuk file adalah null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Method 'post' dari useForm otomatis menangani file upload
        post(route("admin.berita.store"));
    };

    return (
        <>
            <Head title="Tambah Berita Baru" />
            <Card>
                <CardHeader>
                    <CardTitle>Tambah Berita Baru</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="judul">Judul Berita</Label>
                            <Input
                                id="judul"
                                value={data.judul}
                                onChange={(e) =>
                                    setData("judul", e.target.value)
                                }
                            />
                            {errors.judul && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.judul}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tanggal">Tanggal Publikasi</Label>
                            <Input
                                type="date"
                                id="tanggal"
                                value={data.tanggal}
                                onChange={(e) =>
                                    setData("tanggal", e.target.value)
                                }
                            />
                            {errors.tanggal && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.tanggal}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Gambar Utama</Label>
                            <Input
                                type="file"
                                id="image"
                                // Untuk input file, kita set data-nya seperti ini
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                                className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:border-0 file:px-4 file:py-2 file:rounded-md file:text-sm"
                            />
                            {errors.image && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.image}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="ringkasan">Ringkasan</Label>
                            <Textarea
                                id="ringkasan"
                                value={data.ringkasan}
                                onChange={(e) =>
                                    setData("ringkasan", e.target.value)
                                }
                                rows={5}
                            />
                            {errors.ringkasan && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.ringkasan}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <Button type="submit" disabled={processing}>
                                {processing ? "Menyimpan..." : "Simpan"}
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href={route("admin.berita.index")}>
                                    Batal
                                </Link>
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

Create.layout = (page) => <AdminLayout children={page} />;
