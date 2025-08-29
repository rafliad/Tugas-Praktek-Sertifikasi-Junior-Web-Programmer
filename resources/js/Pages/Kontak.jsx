import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { useForm } from "@inertiajs/react";

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
                <h1 className="text-4xl font-bold text-center mb-8">
                    Hubungi Kami
                </h1>

                {success && (
                    <div
                        className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6"
                        role="alert"
                    >
                        <p className="font-bold">Berhasil!</p>
                        <p>{success}</p>
                    </div>
                )}

                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="nama"
                                className="block text-sm font-medium mb-1"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700"
                            />
                            {errors.nama && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.nama}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="pesan"
                                className="block text-sm font-medium mb-1"
                            >
                                Pesan
                            </label>
                            <textarea
                                id="pesan"
                                value={data.pesan}
                                onChange={(e) =>
                                    setData("pesan", e.target.value)
                                }
                                rows="5"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700"
                            ></textarea>
                            {errors.pesan && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.pesan}
                                </p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                                disabled={processing}
                            >
                                {processing ? "Mengirim..." : "Kirim Pesan"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Kontak.layout = (page) => <MainLayout children={page} title="Kontak" />;
