import { CategoriesListResponse } from "@/@types/category-types"
import { api } from "@/services"
import { useQuery } from "@tanstack/react-query"

const STALE_TIME = 1000 * 60 * 10

async function fetchCategories(): Promise<CategoriesListResponse[]> {
  let response = await api.get("/products/categories")

  return response?.data
}

export const useFetchCategories = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: STALE_TIME,
  })

  return { ...query }
}
