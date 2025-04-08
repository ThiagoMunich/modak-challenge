import React from "react"

import { FlatList, View } from "react-native"

import { ProductCard } from "../product"
import { ProductListResponse } from "@/@types/products-types"

export function ProductsList({ products }: Pick<ProductListResponse, "products">) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 16, gap: 20 }}
      renderItem={({ item }) => (
        <ProductCard id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} />
      )}
    />
  )
}
