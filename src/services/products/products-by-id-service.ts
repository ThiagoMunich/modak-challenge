import { api } from ".."
import { ProductDTO } from "@/@types/products-types"
import { mapProductToDTO } from "@/mappers/products/product-mapper"

export async function fetchProductById(id: number): Promise<ProductDTO> {
  const response = await api.get(`/products/${id}?select=title,price,thumbnail,brand,description,stock`)

  const rawData = response?.data

  const product = mapProductToDTO(rawData)

  return product
}
