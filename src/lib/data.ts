import fs from "fs"
import path from "path"

export interface Variant {
  name: string
  price: number
}

export interface Product {
  id: string
  name: string
  slug: string
  category: string
  description: string
  variants: Variant[]
  images: string[]
}

export function getProducts(): Product[] {
  const filePath = path.join(process.cwd(), "data", "products.json")
  if (!fs.existsSync(filePath)) return []
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

export function getProductBySlug(slug: string): Product | null {
  const products = getProducts()
  return products.find(p => p.slug === slug) || null
}

export function getProductsByCategory(category: string): Product[] {
  const products = getProducts()
  return products.filter(p => p.category === category)
}
