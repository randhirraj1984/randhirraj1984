import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkStyles = ({ isActive }) =>
    `px-3 py-2 hover:text-gray-300 transition-colors ${isActive ? 'text-white font-semibold' : 'text-gray-200'}`

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center font-bold text-2xl text-white">
          ifilliate
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyles}>About</NavLink>
          <NavLink to="/shop" className={navLinkStyles}>Shop</NavLink>
          <NavLink to="/shortcodes" className={navLinkStyles}>Shortcodes</NavLink>
          <NavLink to="/blog" className={navLinkStyles}>Blog</NavLink>
          <NavLink to="/media" className={navLinkStyles}>Media</NavLink>
          <NavLink to="/pages" className={navLinkStyles}>Pages</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-800" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-700 bg-gray-900">
          <div className="container py-2 flex flex-col">
            <NavLink to="/" className="px-3 py-2 text-white hover:bg-gray-800" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="px-3 py-2 text-white hover:bg-gray-800" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/shop" className="px-3 py-2 text-white hover:bg-gray-800" onClick={() => setOpen(false)}>Shop</NavLink>
            <NavLink to="/shortcodes" className="px-3 py-2 text-white hover:bg-gray-800" onClick={() => setOpen(false)}>Shortcodes</NavLink>
            <NavLink to="/blog" className="px-3 py-2 text-white hover:bg-gray-800" onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/media" className="px-3 py-2 text-white hover:bg-gray-800" onClick={() => setOpen(false)}>Media</NavLink>
            <NavLink to="/pages" className="px-3 py-2 text-white hover:bg-gray-800" onClick={() => setOpen(false)}>Pages</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
