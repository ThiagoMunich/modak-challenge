import { useQuery } from "@tanstack/react-query"

import { api } from "@/services"
import { useFiltersStore } from "@/store/filters"
import { FilterProps } from "@/@types/filter-types"
import { ProductListResponse } from "@/@types/products-types"

// 5 minutes
const STALE_TIME = 1000 * 60 * 5

async function fetchProducts(filter?: string, type?: FilterProps["type"]): Promise<ProductListResponse> {
  // Keeping this to simulate API error
  // return new Promise((_, reject) => {
  //   setTimeout(() => {
  //     reject(new Error("Simulating API error"))
  //   }, 100)
  // })
  const base = "/products?select=title,price,thumbnail"

  const endpoints = {
    sort: `${base}&sortBy=${filter}&order=asc`,
    category: `/products/category/${filter}?select=title,price,thumbnail`,
  }

  const finalEndpoint = type ? endpoints[type] : base

  const response = await api.get(finalEndpoint)

  return response.data
}

export const useFetchProducts = () => {
  const { currentFilter, type } = useFiltersStore()

  const query = useQuery({
    queryKey: ["products", currentFilter],
    queryFn: () => fetchProducts(currentFilter, type),
    staleTime: STALE_TIME,
  })

  return { ...query }
}
