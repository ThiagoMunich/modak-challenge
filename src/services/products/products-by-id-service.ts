import { api } from ".."
import { Product } from "@/@types/products-types"

export async function fetchProductById(id: number): Promise<Product> {
  let response = await api.get(`/products/${id}?select=title,price,thumbnail,brand,description,stock`)

  return response?.data
}
