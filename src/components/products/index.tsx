import React from "react"

import { FlatList } from "react-native"

import { ProductCard } from "../product"
import { ProductListResponse } from "@/@types/products-types"

export function ProductsList({ products }: Pick<ProductListResponse, "products">) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductCard title={item.title} />}
    />
  )
}
