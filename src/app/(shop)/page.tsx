import { Title, ProductsGrid } from "@/components"
import { initialData } from "@/seed/seed";

const products = initialData.products

export default function ShopPage() {
    return (
        <div>
            <Title
                title="Tienda"
                subtitle="Todos los productos"
            />
            <ProductsGrid products={products} />
        </div>
    );
}