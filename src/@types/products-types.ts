export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  thumbnail: string
  images: string[]
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string // or Date, if you prefer parsing it
  reviewerName: string
  reviewerEmail: string
}

export interface Meta {
  createdAt: string // or Date
  updatedAt: string // or Date
  barcode: string
  qrCode: string
}

export interface ProductListResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}
