"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Edit, ShoppingCart } from "lucide-react"
import Link from "next/link"

// Mock data for suggested outfits
const SUGGESTED_OUTFITS = [
  {
    id: 1,
    name: "Casual Weekend",
    items: [
      { id: 1, name: "Classic White T-Shirt", price: 29.99, image: "/placeholder.svg?height=400&width=300" },
      { id: 2, name: "Slim Fit Jeans", price: 59.99, image: "/placeholder.svg?height=400&width=300" },
      { id: 5, name: "Leather Jacket", price: 129.99, image: "/placeholder.svg?height=400&width=300" },
    ],
    reason:
      "Based on your body type and style preferences, this casual outfit will complement your figure while keeping you comfortable.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 2,
    name: "Office Ready",
    items: [
      { id: 6, name: "Formal Shirt", price: 45.99, image: "/placeholder.svg?height=400&width=300" },
      { id: 7, name: "Casual Chinos", price: 39.99, image: "/placeholder.svg?height=400&width=300" },
      { id: 3, name: "Casual Blazer", price: 89.99, image: "/placeholder.svg?height=400&width=300" },
    ],
    reason: "This business casual look is perfect for your office environment while flattering your body shape.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 3,
    name: "Night Out",
    items: [
      { id: 6, name: "Formal Shirt", price: 45.99, image: "/placeholder.svg?height=400&width=300" },
      { id: 2, name: "Slim Fit Jeans", price: 59.99, image: "/placeholder.svg?height=400&width=300" },
      { id: 5, name: "Leather Jacket", price: 129.99, image: "/placeholder.svg?height=400&width=300" },
    ],
    reason: "This outfit will give you a stylish edge for evening events while maintaining comfort.",
    image: "/placeholder.svg?height=600&width=400",
  },
]

export default function SuggestionsPage() {
  const [selectedOutfit, setSelectedOutfit] = useState(SUGGESTED_OUTFITS[0])

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">AI Clothing Suggestions</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Profile */}
        <div>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Your Profile</h2>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="User Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Body Type</h3>
                  <p>Athletic</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Style Preferences</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Casual</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Modern</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Minimalist</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Favorite Colors</h3>
                  <div className="flex gap-2 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-500" />
                    <div className="w-6 h-6 rounded-full bg-gray-800" />
                    <div className="w-6 h-6 rounded-full bg-white border" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Occasions</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Casual</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Work</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Evening</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Suggested Outfits</h2>
            <div className="space-y-4">
              {SUGGESTED_OUTFITS.map((outfit) => (
                <div
                  key={outfit.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedOutfit.id === outfit.id ? "border-primary bg-primary/5" : ""
                  }`}
                  onClick={() => setSelectedOutfit(outfit)}
                >
                  <h3 className="font-medium">{outfit.name}</h3>
                  <div className="flex mt-2">
                    {outfit.items.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 relative -ml-2 first:ml-0 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outfit Preview */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{selectedOutfit.name}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src={selectedOutfit.image || "/placeholder.svg"}
                    alt={selectedOutfit.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">AI Recommendation</h3>
                    <p className="text-gray-600">{selectedOutfit.reason}</p>
                  </div>

                  <h3 className="text-lg font-medium mb-3">Included Items</h3>
                  <div className="space-y-4">
                    {selectedOutfit.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{item.name}</h4>
                          <p className="text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button asChild className="w-full">
                      <Link href="/try-on">Try On This Outfit</Link>
                    </Button>

                    <Button variant="outline" className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add All to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">More Suggestions For You</h2>

            <Tabs defaultValue="casual">
              <TabsList className="w-full">
                <TabsTrigger value="casual">Casual</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="evening">Evening</TabsTrigger>
                <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
              </TabsList>

              <TabsContent value="casual" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300`}
                          alt={`Casual outfit ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">Casual Look {i}</h3>
                        <p className="text-sm text-gray-500 mt-1">3 items</p>
                        <Button variant="link" className="p-0 h-auto mt-2" asChild>
                          <Link href="/try-on">Try On</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {["work", "evening", "seasonal"].map((tab) => (
                <TabsContent key={tab} value={tab} className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <Image
                            src={`/placeholder.svg?height=300&width=300`}
                            alt={`${tab} outfit ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} Look {i}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">3 items</p>
                          <Button variant="link" className="p-0 h-auto mt-2" asChild>
                            <Link href="/try-on">Try On</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
