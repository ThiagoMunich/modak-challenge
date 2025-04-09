import React from "react"

import { FlatList, View, Text } from "react-native"

import { ProductCard } from "../product"
import { ProductListResponse } from "@/@types/products-types"
import EmptyProductsList from "./empty-list"

export function ProductsList({ products }: Pick<ProductListResponse, "products">) {
  return (
    <FlatList
      data={products}
      ListEmptyComponent={<EmptyProductsList />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 16, gap: 20 }}
      renderItem={({ item }) => (
        <ProductCard id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} />
      )}
    />
  )
}
