import { Link, useForm } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/Card";
import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";
import { Label } from "@/Components/ui/Label";
import { Textarea } from "@/Components/ui/Textarea";

export default function Form({ berita, submitLabel = "Simpan" }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: berita ? "put" : "post",
        judul: berita?.judul || "",
        tanggal: berita?.tanggal || "",
        ringkasan: berita?.ringkasan || "",
        image: null, // Image selalu null di awal
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = berita
            ? route("admin.berita.update", berita.id)
            : route("admin.berita.store");
        post(url);
    };

    return (
        <Card>
            <CardHeader>
                {/* Judul dinamis */}
                <CardTitle>
                    {berita ? "Edit Berita" : "Tambah Berita Baru"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="judul">Judul Berita</Label>
                        <Input
                            id="judul"
                            value={data.judul}
                            onChange={(e) => setData("judul", e.target.value)}
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
                            onChange={(e) => setData("tanggal", e.target.value)}
                        />
                        {errors.tanggal && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.tanggal}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">
                            Gambar Utama (Kosongkan jika tidak ingin diubah)
                        </Label>
                        <Input
                            type="file"
                            id="image"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
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
                            {processing ? "Menyimpan..." : submitLabel}
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
    );
}
