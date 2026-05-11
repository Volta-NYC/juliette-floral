"use client"

import { useCart } from "../cart-context"
import Image from "next/image"

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, cartTotal } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-brand-olive/10">
          <h2 className="font-heading text-2xl text-brand-text">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-brand-peach/20 rounded-full transition-colors text-brand-text"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-brand-olive space-y-4">
              <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg">Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-brand-peach/20 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill unoptimized className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-brand-text leading-tight">{item.name}</h3>
                  <p className="text-sm text-brand-olive mt-1">{item.variantName}</p>
                  <p className="font-medium text-brand-text mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-brand-pink hover:underline"
                  >
                    Remove
                  </button>
                  <div className="flex items-center gap-3 border border-brand-olive/20 rounded-lg px-2 py-1">
                    <button 
                      className="text-brand-olive hover:text-brand-text"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button 
                      className="text-brand-olive hover:text-brand-text"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-brand-olive/10 bg-brand-peach/5 space-y-4">
            <div className="flex justify-between items-center text-lg font-medium text-brand-text">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-olive">Shipping and taxes calculated at checkout.</p>
            <button 
              className="w-full bg-brand-text text-white py-4 rounded-xl hover:bg-brand-pink transition-colors font-medium text-lg"
              onClick={() => alert("Checkout flow to be implemented!")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
