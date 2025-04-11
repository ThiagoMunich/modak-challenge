import { useQuery } from "@tanstack/react-query"

import { useFiltersStore } from "@/store/filters"
import { ProductDTO } from "@/@types/products-types"
import { fetchProducts } from "@/services/products/products-service"

// 5 minutes
const STALE_TIME = 1000 * 60 * 5

export const useFetchProducts = () => {
  const { currentFilter, type } = useFiltersStore()

  const query = useQuery<ProductDTO[]>({
    queryKey: ["products", currentFilter],
    queryFn: () => fetchProducts(currentFilter, type),
    staleTime: STALE_TIME,
  })

  return { ...query }
}
