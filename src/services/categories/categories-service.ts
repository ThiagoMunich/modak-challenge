import { api } from ".."
import { CategoriesListResponse } from "@/@types/category-types"

export async function fetchCategories(): Promise<CategoriesListResponse[]> {
  let response = await api.get("/products/categories")

  return response?.data
}
