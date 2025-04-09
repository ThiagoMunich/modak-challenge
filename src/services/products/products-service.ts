import { api } from ".."
import { FilterProps } from "@/@types/filter-types"

export async function fetchProducts(filter?: string, type?: FilterProps["type"]) {
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
