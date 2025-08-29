// resources/js/Pages/Kontak.jsx

import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { useForm } from "@inertiajs/react";

// 1. Import semua komponen Shadcn yang akan kita gunakan
import { Button } from "@/Components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/Card";
import { Input } from "@/Components/ui/Input";
import { Label } from "@/Components/ui/Label";
import { Textarea } from "@/Components/ui/Textarea";

export default function Kontak({ success }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        email: "",
        pesan: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("kontak.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <div className="container mx-auto py-12 px-6">
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">
                            Hubungi Kami
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {success && (
                            <div
                                className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md"
                                role="alert"
                            >
                                <p className="font-bold">Berhasil!</p>
                                <p>{success}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="nama">Nama</Label>
                                <Input
                                    type="text"
                                    id="nama"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                    placeholder="Masukkan nama lengkap Anda"
                                />
                                {errors.nama && (
                                    <p className="text-sm text-red-500">
                                        {errors.nama}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="contoh@email.com"
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pesan">Pesan</Label>
                                <Textarea
                                    id="pesan"
                                    value={data.pesan}
                                    onChange={(e) =>
                                        setData("pesan", e.target.value)
                                    }
                                    rows="5"
                                    placeholder="Tuliskan pesan Anda di sini..."
                                />
                                {errors.pesan && (
                                    <p className="text-sm text-red-500">
                                        {errors.pesan}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full"
                                >
                                    {processing ? "Mengirim..." : "Kirim Pesan"}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Kontak.layout = (page) => <MainLayout children={page} title="Kontak" />;
