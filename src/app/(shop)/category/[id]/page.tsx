import { ProductsGrid } from "@/components";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";
import { Title } from '../../../../components/ui/title/Title';
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces";

const seedProducts = initialData.products;

export default function CategoryByIdPage({ params }: { params: { id: Category } }) {

    // if (params.id === 'kids') {
    //     notFound()
    // }
    const { id } = params;

    const labels: Record<Category, string> = {
        "men": "hombres",
        "women": "mujeres",
        "kid": "niños",
        "unisex": "todo"

    }

    const products = seedProducts.filter(p => p.gender === id)

    return (
        <div>
            <Title
                title={`Articulo para ${labels[id]}`}
                subtitle="Todos los productos"
                className="mb-2"
            />
            <ProductsGrid products={products} />
        </div>
    );
}