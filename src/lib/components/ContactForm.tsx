"use client"

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent!") }}>
      <div>
        <label className="block text-sm font-medium text-brand-text mb-1">Name</label>
        <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-olive/30 focus:outline-none focus:border-brand-text" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-text mb-1">Email</label>
        <input type="email" className="w-full px-4 py-3 rounded-xl border border-brand-olive/30 focus:outline-none focus:border-brand-text" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-text mb-1">Message</label>
        <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-brand-olive/30 focus:outline-none focus:border-brand-text resize-none" required></textarea>
      </div>
      <button className="w-full bg-brand-text text-white py-4 rounded-xl hover:bg-brand-pink transition-colors font-medium text-lg">
        Submit
      </button>
    </form>
  )
}
