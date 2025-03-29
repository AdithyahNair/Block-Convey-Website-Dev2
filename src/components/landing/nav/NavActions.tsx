import React from 'react'
import { Link } from 'react-router-dom'

export const NavActions: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/coming-soon"
        className="inline-flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium whitespace-nowrap shadow-sm hover:shadow-md text-sm"
      >
        Get Started
      </Link>
      <a
        href="https://calendly.com/arunprasad-11/product-demo-call"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-brand text-white px-4 py-2 rounded-xl hover:bg-brand-dark transition-all duration-200 font-medium whitespace-nowrap shadow-sm hover:shadow-md text-sm"
      >
        Book Demo
      </a>
    </div>
  )
}
