"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import ProductCard from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, SlidersHorizontal } from "lucide-react"

// Mock data for clothing items
const CLOTHING_ITEMS = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "shirts",
    colors: ["white", "black", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "pants",
    colors: ["blue", "black"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 3,
    name: "Casual Blazer",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "outerwear",
    colors: ["navy", "gray", "black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "dresses",
    colors: ["floral", "blue", "red"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 5,
    name: "Leather Jacket",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "outerwear",
    colors: ["black", "brown"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Formal Shirt",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "shirts",
    colors: ["white", "blue", "pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 7,
    name: "Casual Chinos",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "pants",
    colors: ["beige", "navy", "olive"],
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: 8,
    name: "Floral Maxi Dress",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "dresses",
    colors: ["floral", "blue"],
    sizes: ["XS", "S", "M", "L"],
  },
]

export default function ShopPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 150])

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Shop Collection</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Mobile Toggle */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Filters Sidebar */}
        <div className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>

            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  {["All", "Shirts", "Pants", "Dresses", "Outerwear"].map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category.toLowerCase()}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor={category.toLowerCase()} className="ml-2 text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 150]}
                    max={200}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-6"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <Button key={size} variant="outline" className="h-9 text-xs" size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Black", color: "bg-black" },
                    { name: "White", color: "bg-white border border-gray-200" },
                    { name: "Gray", color: "bg-gray-500" },
                    { name: "Blue", color: "bg-blue-500" },
                    { name: "Red", color: "bg-red-500" },
                    { name: "Green", color: "bg-green-500" },
                  ].map((color) => (
                    <div
                      key={color.name}
                      className={`w-6 h-6 rounded-full cursor-pointer ${color.color}`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search for items..." className="pl-10" />
            </div>
            <Select defaultValue="popular">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="shirts">Shirts</TabsTrigger>
              <TabsTrigger value="pants">Pants</TabsTrigger>
              <TabsTrigger value="dresses">Dresses</TabsTrigger>
              <TabsTrigger value="outerwear">Outerwear</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CLOTHING_ITEMS.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </TabsContent>

            {["shirts", "pants", "dresses", "outerwear"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CLOTHING_ITEMS.filter((item) => item.category === category).map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
