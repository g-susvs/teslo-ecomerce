import { Product } from "@/interfaces"
import { ProductGridItem } from "./ProductGridItem"

interface Props {
    products: Product[]
}

export const ProductsGrid = ({ products }: Props) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {
                products.map(product => (
                    <ProductGridItem key={product.title} product={product} />
                ))
            }
        </div>
    )
}
