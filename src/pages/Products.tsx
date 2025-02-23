import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Star } from 'lucide-react';
import { products, flavors, categories, dietaryOptions, IceCream } from '../data/products';

const Products = () => {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const flavorMatch = selectedFlavors.length === 0 || selectedFlavors.includes(product.flavor);
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const dietaryMatch = selectedDietary.length === 0 || 
        selectedDietary.every(diet => product.dietary.includes(diet));
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return flavorMatch && categoryMatch && dietaryMatch && priceMatch;
    });
  }, [selectedFlavors, selectedCategories, selectedDietary, priceRange]);

  const toggleFilter = (array: string[], item: string, setter: (value: string[]) => void) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Ice Creams</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters */}
        <motion.div
          initial={false}
          animate={{ height: showFilters ? 'auto' : 0 }}
          className="overflow-hidden mb-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-2">Price Range (${priceRange[0]} - ${priceRange[1]})</h3>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
                className="w-full"
              />
            </div>

            {/* Flavors */}
            <div>
              <h3 className="font-semibold mb-2">Flavors</h3>
              <div className="flex flex-wrap gap-2">
                {flavors.map(flavor => (
                  <button
                    key={flavor}
                    onClick={() => toggleFilter(selectedFlavors, flavor, setSelectedFlavors)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedFlavors.includes(flavor)
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleFilter(selectedCategories, category, setSelectedCategories)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCategories.includes(category)
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary */}
            <div>
              <h3 className="font-semibold mb-2">Dietary Options</h3>
              <div className="flex flex-wrap gap-2">
                {dietaryOptions.map(diet => (
                  <button
                    key={diet}
                    onClick={() => toggleFilter(selectedDietary, diet, setSelectedDietary)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedDietary.includes(diet)
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {diet}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold text-pink-500">
                  ${product.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.dietary.map(diet => (
                    <span
                      key={diet}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      {diet}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Add to Favorites</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;