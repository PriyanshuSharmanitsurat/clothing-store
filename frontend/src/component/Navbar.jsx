"use client"

import { useState } from "react";
import React from "react";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Categories", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Priyanshu Store
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 transform hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 relative">
              <Heart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Cart */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Account */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
              <User className="h-5 w-5 text-gray-600" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white/95 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-blue-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
