'use client'

import { useState } from 'react'
import { Search, Clock, ChefHat, Heart, Filter } from 'lucide-react'

const mockRecipes = [
    {
        id: 1,
        title: "Homemade Pasta Carbonara",
        description: "A classic Italian dish with creamy egg sauce, crispy pancetta, and perfectly al dente pasta.",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cookTime: "25 min",
        difficulty: "Medium",
        rating: 4.8,
        category: "Italian",
        ingredients: ["Pasta", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
        tags: ["pasta", "italian", "quick", "dinner"]
    },
    {
        id: 2,
        title: "Thai Green Curry",
        description: "A fragrant and spicy curry with coconut milk, fresh vegetables, and aromatic herbs.",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cookTime: "35 min",
        difficulty: "Easy",
        rating: 4.6,
        category: "Thai",
        ingredients: ["Coconut Milk", "Green Curry Paste", "Vegetables", "Fish Sauce", "Thai Basil"],
        tags: ["thai", "curry", "spicy", "vegetarian"]
    },
    {
        id: 3,
        title: "Chocolate Lava Cake",
        description: "Decadent chocolate cakes with molten centers, perfect for a romantic dessert.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cookTime: "20 min",
        difficulty: "Hard",
        rating: 4.9,
        category: "Dessert",
        ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Flour"],
        tags: ["dessert", "chocolate", "romantic", "sweet"]
    },
    {
        id: 4,
        title: "Mediterranean Quinoa Bowl",
        description: "A healthy and colorful bowl packed with protein, fresh vegetables, and Mediterranean flavors.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cookTime: "30 min",
        difficulty: "Easy",
        rating: 4.7,
        category: "Healthy",
        ingredients: ["Quinoa", "Cherry Tomatoes", "Cucumber", "Olives", "Feta Cheese"],
        tags: ["healthy", "vegetarian", "mediterranean", "bowl"]
    },
    {
        id: 5,
        title: "Grilled Salmon with Lemon",
        description: "Perfectly grilled salmon fillet with fresh lemon, herbs, and a crispy skin.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cookTime: "15 min",
        difficulty: "Medium",
        rating: 4.5,
        category: "Seafood",
        ingredients: ["Salmon Fillet", "Lemon", "Olive Oil", "Herbs", "Garlic"],
        tags: ["seafood", "healthy", "grilled", "protein"]
    },
    {
        id: 6,
        title: "Margherita Pizza",
        description: "Classic Neapolitan pizza with fresh mozzarella, basil, and San Marzano tomatoes.",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cookTime: "45 min",
        difficulty: "Medium",
        rating: 4.4,
        category: "Italian",
        ingredients: ["Pizza Dough", "Mozzarella", "Basil", "Tomatoes", "Olive Oil"],
        tags: ["pizza", "italian", "vegetarian", "classic"]
    },
    {
        id: 7,
        title: "Chicken Tikka Masala",
        description: "Creamy and aromatic Indian curry with tender chicken and fragrant spices.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cookTime: "40 min",
        difficulty: "Medium",
        rating: 4.8,
        category: "Indian",
        ingredients: ["Chicken", "Yogurt", "Spices", "Cream", "Tomatoes"],
        tags: ["indian", "curry", "chicken", "spicy"]
    },
    {
        id: 8,
        title: "Avocado Toast",
        description: "Simple yet delicious breakfast with creamy avocado, poached eggs, and microgreens.",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cookTime: "10 min",
        difficulty: "Easy",
        rating: 4.3,
        category: "Breakfast",
        ingredients: ["Bread", "Avocado", "Eggs", "Microgreens", "Salt"],
        tags: ["breakfast", "healthy", "quick", "vegetarian"]
    }
]

const categories = ["All", "Italian", "Thai", "Dessert", "Healthy", "Seafood", "Indian", "Breakfast"]

export default function RecipesPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [showFilters, setShowFilters] = useState(false)

    // Filter recipes based on search query and category
    const filteredRecipes = mockRecipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            recipe.tags.some(tag =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
            )

        const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-dark-900">
            {/* Header */}
            <div className="bg-dark-800 shadow-sm border-b border-dark-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-4xl font-serif font-bold text-white mb-4">
                        Recipe Collection
                    </h1>
                    <p className="text-lg text-gray-300">
                        Discover delicious recipes for every occasion and skill level
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filters */}
                <div className="mb-8">
                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search recipes, ingredients, or techniques..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600 border border-dark-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    <div className="text-gray-300">
                        {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
                    </div>
                </div>

                {/* Recipe Grid */}
                {filteredRecipes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredRecipes.map((recipe) => (
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
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Search className="h-16 w-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No recipes found</h3>
                        <p className="text-gray-300">
                            Try adjusting your search terms or category filter
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
} 