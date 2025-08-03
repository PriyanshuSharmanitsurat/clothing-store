import React from "react"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
  ]

  const categories = [
    { name: "Casual Wear", href: "#" },
    { name: "Formal Wear", href: "#" },
    { name: "Denim", href: "#" },
    { name: "Outerwear", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Footwear", href: "#" },
  ]

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white w-full ">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay in the Loop
            </h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto text-sm">
              Subscribe to our newsletter and get access to new arrivals, offers & tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center text-sm">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Company Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Priyanshu Store
            </h2>
            <p className="text-gray-300 text-sm">
              Your go-to destination for modern, comfortable fashion with the latest styles and quality.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-400" />
              <span className="text-gray-300">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-400" />
              <span className="text-gray-300">hello@priyanshustore.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-gray-300">Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Categories</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.name}>
                <a
                  href={category.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{category.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies & Social */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Legal & Social</h3>
          <ul className="space-y-2 mb-4 text-sm">
            {policies.map((policy) => (
              <li key={policy.name}>
                <a
                  href={policy.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{policy.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div>
            <h4 className="text-xs font-semibold mb-2 text-gray-400 uppercase tracking-wider">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-2 md:mb-0">© 2024 Priyanshu Store. Made with ❤️ in India.</div>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-4 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div className="w-7 h-4 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">MC</span>
              </div>
              <div className="w-7 h-4 bg-purple-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">UPI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
