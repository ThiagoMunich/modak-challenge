import { useQuery } from "@tanstack/react-query"

import { api } from "@/services"
import { CategoriesListResponse } from "@/@types/category-types"

// 10 minutes
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
