import { Utensils, Pizza, Cake, Leaf, Fish, Coffee } from 'lucide-react'

const categories = [
    {
        id: 1,
        name: "Italian Cuisine",
        description: "Classic pasta dishes, pizzas, and Mediterranean flavors",
        icon: Pizza,
        recipeCount: 45,
        color: "bg-red-500",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Asian Fusion",
        description: "Thai, Chinese, Japanese, and Korean culinary delights",
        icon: Utensils,
        recipeCount: 38,
        color: "bg-orange-500",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Healthy & Vegan",
        description: "Nutritious plant-based meals and wholesome ingredients",
        icon: Leaf,
        recipeCount: 52,
        color: "bg-green-500",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Seafood Specialties",
        description: "Fresh fish, shellfish, and ocean-inspired dishes",
        icon: Fish,
        recipeCount: 28,
        color: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Sweet Treats",
        description: "Decadent desserts, pastries, and sweet indulgences",
        icon: Cake,
        recipeCount: 41,
        color: "bg-pink-500",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Beverages",
        description: "Cocktails, smoothies, coffee, and refreshing drinks",
        icon: Coffee,
        recipeCount: 23,
        color: "bg-amber-500",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
]

export default function Categories() {
      return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find the perfect recipe for any occasion, from quick weeknight meals to special occasion feasts.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-dark-600"
            >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative p-8 h-full flex flex-col justify-between">
                                <div>
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-lg ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="h-6 w-6" />
                                    </div>

                                                      {/* Title */}
                  <h3 className="text-2xl font-serif font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Recipe Count */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">
                    {category.recipeCount} recipes
                  </span>
                  <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-200">
                    <span className="text-sm font-medium mr-2">Explore</span>
                    <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <a
            href="/categories"
            className="inline-flex items-center justify-center px-8 py-3 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-lg border border-dark-600 transition-colors duration-200"
          >
            Browse All Categories
          </a>
        </div>
            </div>
        </section>
    )
} 