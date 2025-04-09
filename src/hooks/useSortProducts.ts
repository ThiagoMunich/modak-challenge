import { api } from "@/services"
import { useQuery } from "@tanstack/react-query"

async function fetchSortedProducts(sortBy: string) {
  let response = await api.get(`/products?sortBy=${sortBy}&order=asc`)

  return response?.data
}

export const useSortProducts = (sortBy: string) => {
  const query = useQuery({
    queryKey: ["sort-products", sortBy],
    queryFn: () => fetchSortedProducts(sortBy),
  })

  return { ...query }
}
