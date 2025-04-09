import React, { memo } from "react"

import { FlatList } from "react-native"

import { ProductCard } from "../product"
import EmptyProductsList from "./empty-list"
import { ProductDTO } from "@/@types/products-types"

type Props = {
  products: ProductDTO[]
}

export const ProductsList = memo(({ products }: Props) => {
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
