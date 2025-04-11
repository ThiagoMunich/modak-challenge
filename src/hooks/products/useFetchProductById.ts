import { useQuery } from "@tanstack/react-query"

import { ProductDTO } from "@/@types/products-types"
import { fetchProductById } from "@/services/products/products-by-id-service"

export const useFetchProductById = (id: number) => {
  const query = useQuery<ProductDTO>({
    queryKey: ["products-by-id", id],
    queryFn: () => fetchProductById(id),
  })

  return { ...query }
}
