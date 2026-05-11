"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const fallback = "/placeholder.jpg"
  const list = images.length > 0 ? images : [fallback]
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-brand-peach/10 shadow-md group">
        {list.map((img, i) => (
          <Image
            key={img + i}
            src={img}
            alt={name}
            fill
            unoptimized
            priority={i === 0}
            className={`object-cover transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent" />
      </div>

      {list.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
          {list.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                i === active
                  ? "border-brand-text scale-[1.03] shadow-md"
                  : "border-transparent hover:border-brand-peach opacity-80 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="" fill unoptimized className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
