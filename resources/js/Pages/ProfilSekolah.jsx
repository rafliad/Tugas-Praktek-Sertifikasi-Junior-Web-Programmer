import MainLayout from "@/Layouts/MainLayout";

export default function ProfilSekolah() {
    return (
        <>
            <div className="container mx-auto py-12 px-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                    <h1 className="text-4xl font-bold text-center mb-6">
                        Profil Sekolah Kami
                    </h1>
                    <p className="text-lg leading-relaxed">
                        Selamat datang! Di sini akan ditampilkan informasi
                        lengkap mengenai sejarah, visi, misi, dan fasilitas
                        sekolah. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </>
    );
}

ProfilSekolah.layout = (page) => <MainLayout children={page} title="Profil" />;
