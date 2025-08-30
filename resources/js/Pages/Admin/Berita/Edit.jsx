import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import Form from "./Partials/Form";

export default function Edit({ berita }) {
    return (
        <>
            <Head title="Edit Berita" />
            <Form berita={berita} submitLabel="Update" />
        </>
    );
}
Edit.layout = (page) => <AdminLayout children={page} />;
