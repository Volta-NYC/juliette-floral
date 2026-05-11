"use client"

import { useState } from "react"
import { useCart } from "../cart-context"
import type { Product, Variant } from "../data"

export default function ProductForm({ product }: { product: Product }) {
  const { addItem } = useCart()
  
  // Find the cheapest variant or default to first if exists
  const defaultVariant = product.variants && product.variants.length > 0 
    ? product.variants.reduce((prev, curr) => prev.price < curr.price ? prev : curr) 
    : null

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(defaultVariant)

  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("This item is currently unavailable.")
      return
    }

    addItem({
      productId: product.id,
      name: product.name,
      variantName: selectedVariant.name,
      price: selectedVariant.price,
      quantity: 1,
      image: product.images[0] || "/placeholder.jpg"
    })
  }

  return (
    <div>
      <div className="mb-8">
         {selectedVariant ? (
           <div className="text-2xl text-brand-text font-medium">
             ${selectedVariant.price.toFixed(2)}
           </div>
         ) : (
           <div className="text-lg text-brand-olive italic">Price Unavailable</div>
         )}
      </div>

      <div className="prose prose-brand text-brand-olive mb-10 whitespace-pre-line">
        {product.description || "No description available."}
      </div>

      {product.variants.length > 0 && (
        <div className="mb-8">
          <label className="block text-sm font-medium text-brand-text mb-3">Size</label>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((v, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedVariant(v)}
                className={`px-5 py-2 rounded-full border transition-colors ${
                  selectedVariant?.name === v.name 
                    ? 'border-brand-text bg-brand-text text-white' 
                    : 'border-brand-olive text-brand-olive hover:border-brand-text'
                }`}
              >
                {v.name} - ${v.price.toFixed(2)}
              </button>
            ))}
          </div>
        </div>
      )}

      <button 
        onClick={handleAddToCart}
        disabled={!selectedVariant}
        className="w-full bg-brand-peach hover:bg-brand-pink disabled:bg-brand-olive/20 disabled:text-brand-olive text-brand-text hover:text-white font-medium py-4 rounded-xl transition-colors mt-auto"
      >
        {selectedVariant ? "Add to Cart" : "Unavailable"}
      </button>
      
      <div className="mt-8 pt-8 border-t border-brand-olive/10 text-sm text-brand-olive space-y-2">
        <p className="flex items-center gap-2">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
           </svg>
           Store pickup available at 170 5th Avenue
        </p>
        <p className="flex items-center gap-2">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
           Usually ready in 24 hours
        </p>
      </div>
    </div>
  )
}
