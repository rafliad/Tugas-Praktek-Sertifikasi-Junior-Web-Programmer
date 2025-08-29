import { Link, Head } from "@inertiajs/react";

export default function MainLayout({ children, title }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <Head
                title={title ? `${title} - SMAN 5 Bandung` : "SMAN 5 Bandung"}
            />
            <header className="bg-white dark:bg-gray-800 shadow-md">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        SMAN 5 Bandung
                    </Link>
                    <div className="space-x-4">
                        <Link href="/" className="hover:text-blue-500">
                            Home
                        </Link>
                        <Link href="/berita" className="hover:text-blue-500">
                            Berita
                        </Link>
                        <Link href="/kegiatan" className="hover:text-blue-500">
                            Kegiatan
                        </Link>
                        <Link href="/kontak" className="hover:text-blue-500">
                            Kontak
                        </Link>
                    </div>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="bg-white dark:bg-gray-800 mt-8 py-4">
                <div className="container mx-auto px-6 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} SMAN 5 Bandung. All
                        Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
