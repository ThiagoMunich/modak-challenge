// mappers/product-mapper.ts

import { Product, ProductDTO } from "@/@types/products-types"

export function mapProductToDTO(product: Product): ProductDTO {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    stock: product.stock,
    brand: product.brand || "Hire Munich Dev",
    thumbnail: product.thumbnail,
    description: product.description,
  }
}
