import { Link, usePage, Head } from "@inertiajs/react";
import { LayoutDashboard, Newspaper, LogOut } from "lucide-react";

const NavLink = ({ href, active, children }) => (
    <Link
        href={href}
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            active
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-700 text-gray-300"
        }`}
    >
        {children}
    </Link>
);

export default function AdminLayout({ children }) {
    const { url } = usePage();
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex-shrink-0 p-4">
                <div className="text-2xl font-bold text-center mb-8">
                    Admin Panel
                </div>
                <nav className="space-y-2">
                    <NavLink
                        href={route("admin.dashboard")}
                        active={url.startsWith("/admin/dashboard")}
                    >
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink
                        href={route("admin.berita.index")}
                        active={url.startsWith("/admin/berita")}
                    >
                        <Newspaper size={20} />
                        <span>Kelola Berita</span>
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <Head>
                    <link rel="icon" type="image/png" href="/favicon.png" />
                </Head>
                <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-end items-center">
                    <div className="flex items-center space-x-3">
                        <span>{user.name}</span>
                        {/* Tombol Logout */}
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="text-gray-500 hover:text-red-500"
                        >
                            <LogOut size={20} />
                        </Link>
                    </div>
                </header>
                <main className="p-6 flex-grow">{children}</main>
            </div>
        </div>
    );
}
