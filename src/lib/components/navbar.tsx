"use client"

import Link from "next/link"
import { useState } from "react"
import { useCart } from "../cart-context"

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Flowers",
    href: "#",
    children: [
      { label: "Fresh Flowers", href: "/collections/flowers" },
      { label: "Dry Flowers", href: "/collections/dry-flowers" },
    ],
  },
  { label: "Collections", href: "/collections" },
  { label: "Plants", href: "/collections/plants" },
  { label: "Cards", href: "/collections/cards" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [flowersOpen, setFlowersOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-brand-olive/95 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between text-white">
        <button
          className="hidden lg:inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
          aria-label="Search"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
          </svg>
        </button>

        <Link href="/" className="font-heading text-2xl sm:text-3xl text-white tracking-wide text-center">
          Juliette Floral Design
        </Link>

        <div className="hidden lg:flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            aria-label="Account"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21a8 8 0 10-16 0M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </button>
          <button
            className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            aria-label="Cart"
            onClick={() => setIsCartOpen(true)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h15l-1.5 9h-12zM6 6L4 3H2m7 15a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-peach text-brand-text text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 hidden lg:block">
        <div className="flex items-center justify-center gap-7 text-sm font-body text-white/95">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 hover:text-brand-peach transition-colors duration-300">
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-brand-peach rounded-lg shadow-lg opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-brand-text hover:bg-brand-peach transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-brand-peach transition-colors duration-300">
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-brand-olive border-t border-white/20 px-4 py-4 space-y-1 text-sm text-white">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setFlowersOpen(!flowersOpen)}
                  className="flex items-center gap-1 py-2 w-full text-left hover:text-brand-peach transition-colors duration-300"
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor" />
                  </svg>
                </button>
                {flowersOpen && (
                  <div className="pl-4 space-y-1 mb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1 hover:text-brand-peach transition-colors duration-300"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 hover:text-brand-peach transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}
