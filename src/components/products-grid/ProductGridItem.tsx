'use client';

import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
    product: Product
}
export const ProductGridItem = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState(product.images[0]);

    const handleMouseEnter = () => setDisplayImage(product.images[1]);
    const handleMouseLeave = () => setDisplayImage(product.images[0]);

    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Link
                className="relative"
                href={`/product/${product.slug}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    className="w-full object-cover rounded"
                    width={500}
                    height={500}

                />
            </Link>
            <div className="p-4 flex flex-col">
                <Link
                    href={`/product/${product.slug}`}
                    className="hover:text-blue-700 transition-all"
                >
                    {product.title}
                </Link>
                <span className="font-bold">$ {product.price}</span>
            </div>
        </div>
    )
}