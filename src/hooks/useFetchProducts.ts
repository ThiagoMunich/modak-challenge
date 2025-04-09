import { api } from "@/services"
import { ProductListResponse } from "@/@types/products-types"

import { useSuspenseQuery } from "@tanstack/react-query"

async function fetchProducts(): Promise<ProductListResponse> {
  let response = await api.get("/products?select=title,price,thumbnail")

  return response.data
}

export const useFetchProducts = () => {
  const query = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  return { ...query }
}
