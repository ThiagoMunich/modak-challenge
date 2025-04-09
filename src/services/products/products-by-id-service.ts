import { api } from ".."
import { Product } from "@/@types/products-types"

export async function fetchProductById(id: number): Promise<Product> {
  let response = await api.get(`/products/${id}?select=description,brand,stock`)

  return response?.data
}
