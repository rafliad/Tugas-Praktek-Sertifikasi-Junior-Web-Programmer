import { Link, Head } from "@inertiajs/react";

// Terima props 'canLogin' dan 'canRegister' dari controller
export default function ProfilSekolah({ canLogin, canRegister }) {
    return (
        <>
            <Head title="Profil Sekolah" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                {/* Bagian Link Login & Register di pojok kanan atas */}
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {canLogin ? (
                        <Link
                            href={route("login")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>
                    ) : null}

                    {canRegister ? (
                        <Link
                            href={route("register")}
                            className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    ) : null}
                </div>

                {/* Konten Utama Halaman Anda */}
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center text-4xl font-bold text-gray-800 dark:text-white">
                        Profil Sekolah Kami
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-6">
                        <p className="text-gray-600 dark:text-gray-400">
                            Selamat datang! Di sini akan ditampilkan informasi
                            lengkap mengenai sejarah, visi, misi, dan fasilitas
                            sekolah.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
