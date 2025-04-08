import { ProductListResponse } from "@/@types/products-types"
import { api } from "@/services"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

async function fetchProducts(): Promise<ProductListResponse> {
  let response = await api.get("/products?select=title,price,thumbnail")

  return response.data
}

export const useFetchProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  return { ...query }
}
