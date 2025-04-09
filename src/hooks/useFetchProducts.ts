import { api } from "@/services"
import { ProductListResponse } from "@/@types/products-types"

import { useSuspenseQuery } from "@tanstack/react-query"

// 5 minutes
const STALE_TIME = 1000 * 60 * 5

async function fetchProducts(): Promise<ProductListResponse> {
  let response = await api.get("/products?select=title,price,thumbnail")

  // throw new Error("Erro simulado na requisição")

  return response.data
}

export const useFetchProducts = () => {
  const query = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: STALE_TIME,
  })

  return { ...query }
}
