import { useQuery } from "@tanstack/react-query"

import { api } from "@/services"
import { Product } from "@/@types/products-types"

async function fetchProductById(id: number): Promise<Product> {
  let response = await api.get(`/products/${id}?select=description,brand,stock`)

  return response.data
}

export const useFetchProductById = (id: number) => {
  const query = useQuery({
    queryKey: ["products-by-id", id],
    queryFn: () => fetchProductById(id),
  })

  return { ...query }
}
