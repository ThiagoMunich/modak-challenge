import { useQuery } from "@tanstack/react-query"

import { api } from "@/services"
import { ProductListResponse } from "@/@types/products-types"

// 5 minutes
const STALE_TIME = 1000 * 60 * 5

async function fetchProducts(): Promise<ProductListResponse> {
  // Keeping this to simulate API error
  // return new Promise((_, reject) => {
  //   setTimeout(() => {
  //     reject(new Error("Simulating API error"))
  //   }, 100)
  // })

  let response = await api.get("/products?select=title,price,thumbnail")

  return response?.data
}

export const useFetchProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: STALE_TIME,
  })

  return { ...query }
}
