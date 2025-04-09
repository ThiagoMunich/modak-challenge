import { useQuery } from "@tanstack/react-query"

import { fetchProductById } from "@/services/products/products-by-id-service"

export const useFetchProductById = (id: number) => {
  const query = useQuery({
    queryKey: ["products-by-id", id],
    queryFn: () => fetchProductById(id),
  })

  return { ...query }
}
