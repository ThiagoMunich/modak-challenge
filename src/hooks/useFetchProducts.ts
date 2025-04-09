import { useQuery } from "@tanstack/react-query"

import { api } from "@/services"
import { ProductListResponse } from "@/@types/products-types"

// 5 minutes
const STALE_TIME = 1000 * 60 * 5

async function fetchProducts(sortBy?: string): Promise<ProductListResponse> {
  // Keeping this to simulate API error
  // return new Promise((_, reject) => {
  //   setTimeout(() => {
  //     reject(new Error("Simulating API error"))
  //   }, 100)
  // })

  const regularEndpoint = "/products?select=title,price,thumbnail"

  const sortByEndpoint = `/products?select=title,price,thumbnail&sortBy=${sortBy}&order=asc`

  let response = await api.get(sortBy ? sortByEndpoint : regularEndpoint)

  return response?.data
}

export const useFetchProducts = (sortBy?: string) => {
  const query = useQuery({
    queryKey: ["products", sortBy],
    queryFn: () => fetchProducts(sortBy),
    staleTime: STALE_TIME,
  })

  return { ...query }
}
