import { notFound } from "next/navigation";

export default function CategoryByIdPage({ params }: { params: { id: string } }) {

    if (params.id === 'kids') {
        notFound()
    }

    return (
        <div>
            <h1>Category: {params.id}</h1>
        </div>
    );
}