import { api } from ".."
import { ProductDTO } from "@/@types/products-types"
import { FilterProps } from "@/@types/filter-types"
import { mapProductToDTO } from "@/mappers/products/product-mapper"

export async function fetchProducts(filter?: string, type?: FilterProps["type"]): Promise<ProductDTO> {
  // Keeping this to simulate API error
  // return new Promise((_, reject) => {
  //   setTimeout(() => {
  //     reject(new Error("Simulating API error"))
  //   }, 100)
  // })

  const base = "/products?select=title,price,thumbnail,brand,description,stock"

  const endpoints = {
    sort: `${base}&sortBy=${filter}&order=asc`,
    category: `/products/category/${filter}?select=title,price,thumbnail,brand,description,stock`,
  }

  const finalEndpoint = type ? endpoints[type] : base

  const response = await api.get(finalEndpoint)

  const rawProducts = response?.data?.products

  const products = rawProducts?.map(mapProductToDTO)

  return products
}
