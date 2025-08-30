import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import Form from "./Partials/Form";

export default function Create() {
    return (
        <>
            <Head title="Tambah Berita Baru" />
            <Form />
        </>
    );
}
Create.layout = (page) => <AdminLayout children={page} />;
