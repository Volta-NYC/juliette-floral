import Link from "next/link"

const collections = [
  {
    name: "Valentine's Collection",
    href: "/pages/collections",
    description: "Love is in the air with warm, romantic arrangements.",
    emoji: "🌹",
  },
  {
    name: "Forever Flowers",
    href: "/pages/collections",
    description: "Long-lasting florals styled for modern interiors.",
    emoji: "🌸",
  },
  {
    name: "Sympathy",
    href: "/pages/collections",
    description: "Thoughtful designs crafted with care and grace.",
    emoji: "🤍",
  },
]

const products = [
  { name: "Butterfly Bouquet", price: "$115.00", href: "#", emoji: "🦋" },
  { name: "Nova Bouquet", price: "From $95.00", href: "#", emoji: "✨" },
  { name: "Crimson Kiss", price: "From $105.00", href: "#", badge: "Sold out", emoji: "❤️" },
  { name: "Super Bouquet!", price: "From $225.00", href: "#", emoji: "💐" },
]

export default function HomePage() {
  return (
    <div className="bg-[#f7f7f5]">
      <section className="pt-8 sm:pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_420px] gap-8 items-end">
          <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-tr from-brand-olive/85 via-brand-olive/70 to-brand-text min-h-[440px] sm:min-h-[560px] shadow-[0_20px_60px_rgba(55,82,65,0.22)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,202,179,0.4),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(226,134,100,0.35),transparent_50%)]" />
            <div className="absolute right-6 top-8 text-6xl sm:text-7xl opacity-90">💐</div>
            <div className="absolute left-6 bottom-8 text-6xl sm:text-7xl opacity-90">🌸</div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-white/90 text-sm tracking-[0.15em] uppercase">Brooklyn Florals</p>
              <h2 className="font-heading text-white text-3xl sm:text-4xl mt-2 max-w-xl leading-tight">
                Handcrafted arrangements for meaningful moments.
              </h2>
            </div>
          </div>

          <div className="lg:-ml-28 z-10">
            <div className="bg-brand-peach rounded-[24px] p-7 sm:p-9 shadow-[0_15px_40px_rgba(226,134,100,0.25)] border border-brand-orange/20">
              <h1 className="font-heading text-4xl sm:text-5xl text-brand-text leading-tight">
                Bringing moments to life through flowers
              </h1>
              <p className="text-brand-text/80 text-xl mt-5">From our hands to your heart.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pages/collections"
                  className="inline-block px-7 py-3 bg-brand-text text-white rounded-[12px] hover:bg-brand-text/90 transition-colors font-medium"
                >
                  Shop now
                </Link>
                <Link
                  href="/pages/events"
                  className="inline-block px-7 py-3 border border-brand-text/40 text-brand-text rounded-[12px] hover:bg-white/45 transition-colors font-medium"
                >
                  Event florals
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-white rounded-2xl p-4 border border-brand-peach text-center">
                <p className="font-heading text-2xl text-brand-text">Same Day</p>
                <p className="text-xs text-brand-text/70 mt-1 uppercase tracking-wide">Pickup Select Items</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-brand-peach text-center">
                <p className="font-heading text-2xl text-brand-text">Custom</p>
                <p className="text-xs text-brand-text/70 mt-1 uppercase tracking-wide">Design Requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl text-brand-text">Browse Collections</h2>
            <Link href="/pages/collections" className="text-sm text-brand-text hover:text-brand-orange transition-colors">
              View all collections
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {collections.map((col) => (
              <Link
                key={col.name}
                href={col.href}
                className="group block rounded-[20px] overflow-hidden border border-brand-peach hover:shadow-[0_12px_28px_rgba(128,139,95,0.2)] transition-all bg-white"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-peach via-brand-peach/70 to-brand-orange/30 flex items-center justify-center">
                  <span className="text-7xl select-none">{col.emoji}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-brand-text text-2xl group-hover:text-brand-orange transition-colors flex items-center gap-2">
                    {col.name}
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 14 10">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor" />
                    </svg>
                  </h3>
                  <p className="text-sm text-brand-text/70 mt-2 leading-relaxed">{col.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-peach py-16 border-y border-brand-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.18em] text-xs text-brand-text/70">Featured This Week</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-brand-text mt-2">Forever Flowers</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {products.map((product) => (
              <Link key={product.name} href={product.href} className="group block">
                <div className="relative rounded-[16px] overflow-hidden border border-brand-orange/20 bg-white shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gradient-to-b from-white to-brand-peach/45 flex items-center justify-center">
                    <span className="text-5xl select-none">{product.emoji}</span>
                  </div>
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-brand-text text-white text-xs px-2 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium text-brand-text group-hover:text-brand-orange transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brand-text/70 mt-0.5">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-4xl text-brand-text">Capturing Magic Through Flowers</h2>
          <p className="text-brand-text/70 leading-relaxed">
            Based in Brooklyn, NY, we design custom floral arrangements for everyday joy and once-in-a-lifetime celebrations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/about"
              className="px-6 py-3 bg-brand-orange text-white rounded-[12px] hover:bg-brand-orange/90 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-brand-pink text-brand-pink rounded-[12px] hover:bg-brand-pink/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
