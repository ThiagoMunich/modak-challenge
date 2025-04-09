import { useQuery } from "@tanstack/react-query"

import { api } from "@/services"
import { ProductListResponse } from "@/@types/products-types"
import { useFiltersStore } from "@/store/filters"
import { FilterProps } from "@/@types/filter-types"

// 5 minutes
const STALE_TIME = 1000 * 60 * 5

async function fetchProducts(filter?: string, type?: FilterProps["type"]): Promise<ProductListResponse> {
  // Keeping this to simulate API error
  // return new Promise((_, reject) => {
  //   setTimeout(() => {
  //     reject(new Error("Simulating API error"))
  //   }, 100)
  // })

  const allProductsEndpoint = "/products?select=title,price,thumbnail"

  const sortByEndpoint = `/products?select=title,price,thumbnail&sortBy=${filter}&order=asc`

  const filterByCategoryEndpoint = `/products/category/${filter}?select=title,price,thumbnail&`

  const finalEndpoint =
    type === "category" ? filterByCategoryEndpoint : type === "sort" ? sortByEndpoint : allProductsEndpoint

  console.log(finalEndpoint)

  let response = await api.get(finalEndpoint)

  return response?.data
}

export const useFetchProducts = (sortBy?: string) => {
  const { currentFilter, type } = useFiltersStore()

  const query = useQuery({
    queryKey: ["products", currentFilter],
    queryFn: () => fetchProducts(currentFilter, type),
    staleTime: STALE_TIME,
  })

  return { ...query }
}
