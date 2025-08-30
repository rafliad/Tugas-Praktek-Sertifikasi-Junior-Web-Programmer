import AdminLayout from "@/Layouts/AdminLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold">
                    Selamat Datang, {user.name}!
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Anda berada di halaman utama Admin Panel. Silakan gunakan
                    menu di sebelah kiri untuk mengelola konten website.
                </p>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
