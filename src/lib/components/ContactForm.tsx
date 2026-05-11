"use client"

import { useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-brand-olive/30 bg-white focus:outline-none focus:border-brand-text focus:ring-2 focus:ring-brand-peach/40 transition-all duration-300"

  if (sent) {
    return (
      <div className="text-center py-10 animate-bloom">
        <div className="text-5xl mb-4">🌸</div>
        <h3 className="font-heading text-2xl text-brand-text mb-2">Thank You!</h3>
        <p className="text-brand-olive">We&apos;ll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div>
        <label className="block text-sm font-medium text-brand-text mb-1">Name</label>
        <input type="text" className={inputClass} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-text mb-1">Email</label>
        <input type="email" className={inputClass} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-text mb-1">Message</label>
        <textarea rows={5} className={`${inputClass} resize-none`} required></textarea>
      </div>
      <button className="w-full bg-brand-text text-white py-4 rounded-xl hover:bg-brand-pink hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-medium text-lg">
        Send Message
      </button>
    </form>
  )
}
