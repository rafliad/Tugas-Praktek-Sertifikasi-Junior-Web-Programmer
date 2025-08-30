// resources/js/Pages/TentangKami.jsx

import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/Card";

// Import ikon-ikon yang akan kita gunakan dari lucide-react
import {
    UsersRound,
    GraduationCap,
    Microscope,
    BookOpenCheck,
} from "lucide-react";

export default function TentangKami() {
    const stats = [
        {
            icon: <UsersRound className="w-10 h-10 text-blue-500" />,
            value: "1,000+",
            label: "Siswa Aktif",
        },
        {
            icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
            value: "88",
            label: "Guru Profesional",
        },
        {
            icon: <Microscope className="w-10 h-10 text-blue-500" />,
            value: "7",
            label: "Laboratorium",
        },
        {
            icon: <BookOpenCheck className="w-10 h-10 text-blue-500" />,
            value: "30+",
            label: "Ekstrakurikuler",
        },
    ];

    return (
        <>
            <div className="container mx-auto py-12 px-6 space-y-16">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Tentang SMAN 5 Bandung
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        Mengenal lebih dekat institusi kami, dari sejarah
                        panjang hingga komitmen kami untuk masa depan pendidikan
                        yang cemerlang.
                    </p>
                </section>

                {/* Seksi Statistik Kunci dengan Ikon */}
                <section>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
                            >
                                {stat.icon}
                                <p className="text-3xl font-bold mt-4">
                                    {stat.value}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seksi Sejarah dengan Layout Dua Kolom */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-4">
                        <h2 className="text-3xl font-semibold mb-4">Sejarah</h2>
                        <p>
                            Seiring dengan gagasan politik etis pada akhir abad
                            19 dan penyelenggaraan pendidikan bagi masyarakat
                            Belanda yang bermukim di Hindia Belanda, maka
                            dibangunlah Hooge Burgere School (HBS) pada tahun
                            1915 yang terletak di Beliton Straat ( Jl. Belitung
                            ) Bandung. HBS menerima murid untuk pertama kalinya
                            tahun 1916 dan dibuka bagi masyarakat Belanda serta
                            bagi kaum bangsawan pribumi. Pendidikannya
                            berorientasi pada sistem pendidikan Eropa kontinen
                            dengan lama masa belajar tiga tahun. Bangunan asli
                            dari HBS ini adalah yang kini menjadi bangunan induk
                            di bagian depan, yang dipergunakan bersama-sama
                            dengan SMAN 3 Bandung, serta rangkaian bangunan yang
                            memanjang dari barat sampai timur yang saat ini
                            digunakan sebagai ruang BP/BK, perpustakaan, dan
                            ruang audio visual SMAN 5.
                        </p>
                        <p>
                            Selama masa pendudukan Jepang di Indonesia
                            (1942-1945) dan masa mempertahankan kemerdekaan
                            (1945-1949) tidak didapat keterangan tentang
                            keberadaan dan kelanjutan HBS ini. Akan tetapi pada
                            tahun 1950 dibentuklah SMA Belitung dan setahun
                            kemudian dipecah menjadi tiga, yaitu SMA A (sekarang
                            SMAN 1) dan SMA B (sekarang SMAN 2, 3, dan 4) serta
                            SMA C menjadi SMAN 5.
                        </p>
                        <p>
                            Ketika jabatan kepala sekolah (dulu sebutannya
                            Direktur) dipegang oleh Tan Kiem Hay dimulailah
                            kewajiban mengenakan seragam sekolah dan upacara
                            bendera setiap hari senin, yang tentunya didasarkan
                            atas keputusan Departemen Pendidikan dan Kebudayaan.
                            Pada masa inilah tidak jarang siswa putri SMA 5
                            diundang menari di istana Merdeka manakala Presiden
                            Sukarno menerima tamu negara.
                        </p>
                        <p>
                            Seiring dengan bertambahnya jumlah siswa maka
                            kemudian dibentuklah sekolah baru dan menggunakan
                            gedung yang sama. SMA 3 dan SMA 5 memiliki filial
                            yang kemudian mandiri yaitu SMA 9, 12, 14, dan 19.
                            Sesuai dengan ketentuan pemerintah mengenai
                            kurikulum maka SMA 5 pun menerapkan 1968, 1975,
                            1984,1994,2004 (KBK) yang menyebabkan
                            jurusan-jurusan seperti A1, A2, dan A3 (kurikulum
                            1984), kurikulum KTSP(IA dan IS), tahun 2007 sampai
                            sekarang masih berstatus R-SMA-BI.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/sejarah.jpg"
                            alt="Gedung Sejarah SMAN 5 Bandung"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>
                </section>

                {/* Seksi Visi & Misi dengan Card */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Visi</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                                    <p>
                                        "Sekolah Unggul yang Berdaya Saing
                                        Tinggi, Berpijak pada Agama, Budaya, dan
                                        Iptek, serta berwawasan Lingkungan"
                                    </p>
                                </blockquote>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Misi</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside text-lg space-y-2">
                                    <li>
                                        Membentuk karakter dan kepribadian siswa
                                        yang bermartabat dan berjiwa Pancasila
                                    </li>
                                    <li>
                                        Mengembangkan potensi kecerdasan
                                        intelektual, emosional, dan spiritual
                                    </li>
                                    <li>
                                        Mengembangkan ilmu pengetahuan dan
                                        teknologi, seni, dan budaya yang unggul
                                    </li>
                                    <li>
                                        Meningkatkan profesionalisme tenaga
                                        pendidik dan kependidikan, dan
                                        akuntabilitas sekolah sebagai pusat
                                        pengembangan pendidikan berdasarkan
                                        standar nasional dan internasional
                                    </li>
                                    <li>
                                        Memberdayakan peran serta stakeholders
                                        dalam penyelenggaraan pendidikan yang
                                        bermutu dan berdaya saing global
                                        berdasarkan prinsip Manajemen Berbasis
                                        Sekolah (MBS).
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    );
}

TentangKami.layout = (page) => (
    <MainLayout children={page} title="Tentang Kami" />
);
