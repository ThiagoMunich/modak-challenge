import React, { memo } from "react"

import { FlatList, FlatListProps } from "react-native"

import { ProductCard } from "../product"
import EmptyProductsList from "./empty-list"
import { ProductListResponse } from "@/@types/products-types"

export const ProductsList = memo(({ products }: Pick<ProductListResponse, "products">) => {
  return (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyProductsList />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 16, gap: 20 }}
      renderItem={({ item }) => (
        <ProductCard id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} />
      )}
    />
  )
})
