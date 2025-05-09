import { useQuery } from "@tanstack/react-query"

import { CategoriesListResponse } from "@/@types/category-types"
import { fetchCategories } from "@/services/categories/categories-service"

// 10 minutes
const STALE_TIME = 1000 * 60 * 10

export const useFetchCategories = () => {
  const query = useQuery<CategoriesListResponse[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: STALE_TIME,
  })

  return { ...query }
}
