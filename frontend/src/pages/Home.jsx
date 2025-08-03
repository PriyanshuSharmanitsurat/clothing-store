import React from "react"; // ✅ Required for JSX

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: 499,
      description: "Comfortable cotton t-shirt",
      image: "/placeholder.svg?height=200&width=200",
      category: "Casual",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 999,
      description: "Stylish slim-fit jeans",
      image: "/placeholder.svg?height=200&width=200",
      category: "Denim",
    },
    {
      id: 3,
      name: "Winter Jacket",
      price: 1499,
      description: "Warm and trendy jacket",
      image: "/placeholder.svg?height=200&width=200",
      category: "Outerwear",
    },
    {
      id: 4,
      name: "Casual Shirt",
      price: 799,
      description: "Perfect for everyday wear",
      image: "/placeholder.svg?height=200&width=200",
      category: "Formal",
    },
    {
      id: 5,
      name: "Hoodie",
      price: 899,
      description: "Cozy and comfortable hoodie",
      image: "/placeholder.svg?height=200&width=200",
      category: "Casual",
    },
    {
      id: 6,
      name: "Chinos",
      price: 1199,
      description: "Smart casual chinos",
      image: "/placeholder.svg?height=200&width=200",
      category: "Formal",
    },
  ];

  const categories = [
    { name: "Casual Wear", image: "/placeholder.svg?height=150&width=150", count: "25+ Items" },
    { name: "Formal Wear", image: "/placeholder.svg?height=150&width=150", count: "18+ Items" },
    { name: "Denim", image: "/placeholder.svg?height=150&width=150", count: "12+ Items" },
    { name: "Outerwear", image: "/placeholder.svg?height=150&width=150", count: "15+ Items" },
  ];

  const testimonials = [
    { name: "Rahul Sharma", review: "Amazing quality and fast delivery! Love shopping here.", rating: 5 },
    { name: "Priya Patel", review: "Great collection and affordable prices. Highly recommended!", rating: 5 },
    { name: "Amit Kumar", review: "Excellent customer service and trendy designs.", rating: 4 },
  ];

  const features = [
    { icon: "🚚", title: "Free Shipping", description: "On orders above ₹999" },
    { icon: "🔄", title: "Easy Returns", description: "30-day return policy" },
    { icon: "💳", title: "Secure Payment", description: "100% secure transactions" },
    { icon: "📞", title: "24/7 Support", description: "Always here to help" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Welcome to Priyanshu Store
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover the latest trends in fashion with unbeatable style and comfort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              View Collection
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Categories Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-3 group-hover:scale-105">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-full bg-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{category.name}</h3>
                  <p className="text-blue-600 text-center font-semibold">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Featured Products Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Handpicked items just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Special Offer Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Special Offer!</h2>
          <p className="text-xl mb-8">Get 30% off on your first purchase. Limited time offer!</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold mb-2">30% OFF</div>
            <div className="text-xl">
              Use code: <span className="font-bold bg-white text-purple-600 px-4 py-2 rounded-lg">FIRST30</span>
            </div>
          </div>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Shop Now & Save
          </button>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-gray-300">
            Subscribe to our newsletter and be the first to know about new arrivals and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
