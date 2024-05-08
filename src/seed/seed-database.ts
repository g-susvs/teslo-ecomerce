import { initialData } from "./seed"
import prisma from '../lib/prisma'

async function main() {


    // 1. Borrar datos
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    // 2. Crear categorias

    const { products, categories } = initialData

    const categoriesData = categories.map(name => ({ name }))

    await prisma.category.createMany({
        data: categoriesData
    })

    // 2.1 Crear map: clave=categoria, valor=categoria id
    const categoriesDB = await prisma.category.findMany()

    const categoriesMap = categoriesDB.reduce((map, category) => {

        map[category.name.toLowerCase()] = category.id

        return map
    }, {} as Record<string, string>)

    // Productos

    products.forEach(async (product) => {

        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type]
            }
        })


        const imageData = images.map(url => ({
            url,
            productID: dbProduct.id
        }))


        await prisma.productImage.createMany({
            data: imageData
        })

    })

    // Products images
}

(() => {

    if (process.env.NODE_ENV === 'production') return
    main()
})()