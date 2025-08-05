import { Clock, ChefHat, Heart } from 'lucide-react'

const featuredRecipes = [
    {
        id: 1,
        title: "Homemade Pasta Carbonara",
        description: "A classic Italian dish with creamy egg sauce, crispy pancetta, and perfectly al dente pasta.",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        cookTime: "25 min",
        difficulty: "Medium",
        rating: 4.8,
        category: "Italian"
    },
    {
        id: 2,
        title: "Thai Green Curry",
        description: "A fragrant and spicy curry with coconut milk, fresh vegetables, and aromatic herbs.",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        cookTime: "35 min",
        difficulty: "Easy",
        rating: 4.6,
        category: "Thai"
    },
    {
        id: 3,
        title: "Chocolate Lava Cake",
        description: "Decadent chocolate cakes with molten centers, perfect for a romantic dessert.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80",
        cookTime: "20 min",
        difficulty: "Hard",
        rating: 4.9,
        category: "Dessert"
    },
    {
        id: 4,
        title: "Mediterranean Quinoa Bowl",
        description: "A healthy and colorful bowl packed with protein, fresh vegetables, and Mediterranean flavors.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        cookTime: "30 min",
        difficulty: "Easy",
        rating: 4.7,
        category: "Healthy"
    }
]

export default function FeaturedRecipes() {
      return (
    <section className="py-16 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Featured Recipes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our most popular and delicious recipes, carefully curated to inspire your culinary journey.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-dark-600"
            >
                            {/* Recipe Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4">
                                    <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200">
                                        <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                                    </button>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                                        {recipe.category}
                                    </span>
                                </div>
                            </div>

                            {/* Recipe Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                                    {recipe.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                    {recipe.description}
                                </p>

                                {/* Recipe Meta */}
                                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{recipe.cookTime}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ChefHat className="h-4 w-4" />
                                        <span>{recipe.difficulty}</span>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-1">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`h-4 w-4 ${i < Math.floor(recipe.rating)
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium text-gray-300">
                                            {recipe.rating}
                                        </span>
                                    </div>
                                    <button className="text-primary-400 hover:text-primary-300 font-medium text-sm">
                                        View Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <a
                        href="/recipes"
                        className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                        View All Recipes
                    </a>
                </div>
            </div>
        </section>
    )
} 