"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { RotateCw, Share2, ShoppingCart } from "lucide-react"

// Mock data for clothing items
const CLOTHING_ITEMS = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "tops",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "bottoms",
  },
  {
    id: 3,
    name: "Casual Blazer",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "outerwear",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "dresses",
  },
]

export default function TryOnPage() {
  const [rotationAngle, setRotationAngle] = useState(0)
  const [selectedItems, setSelectedItems] = useState({
    tops: CLOTHING_ITEMS[0],
    bottoms: CLOTHING_ITEMS[1],
    outerwear: null,
    dresses: null,
  })

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Virtual Try-On</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Avatar Preview */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="aspect-[3/4] bg-gray-100 relative">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Avatar Preview"
                  fill
                  className="object-cover"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                />
              </div>

              {/* Rotation Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setRotationAngle(rotationAngle - 45)}
                  className="h-8 w-8 rounded-full"
                >
                  <RotateCw className="h-4 w-4 -scale-x-100" />
                </Button>

                <Slider
                  value={[rotationAngle]}
                  min={-180}
                  max={180}
                  step={5}
                  onValueChange={(value) => setRotationAngle(value[0])}
                  className="w-32"
                />

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setRotationAngle(rotationAngle + 45)}
                  className="h-8 w-8 rounded-full"
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>

              {/* Share Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <Button variant="outline" className="flex-1">
              Save Look
            </Button>
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Clothing Selection */}
        <div>
          <Tabs defaultValue="tops">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="tops">Tops</TabsTrigger>
              <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
              <TabsTrigger value="outerwear">Outerwear</TabsTrigger>
              <TabsTrigger value="dresses">Dresses</TabsTrigger>
            </TabsList>

            {["tops", "bottoms", "outerwear", "dresses"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {CLOTHING_ITEMS.filter((item) => item.category === category).map((item) => (
                    <div
                      key={item.id}
                      className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                        selectedItems[category]?.id === item.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() =>
                        setSelectedItems({
                          ...selectedItems,
                          [category]: item,
                        })
                      }
                    >
                      <div className="aspect-square relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="p-2">
                        <h3 className="text-sm font-medium truncate">{item.name}</h3>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedItems[category] && (
                  <Card className="mt-6">
                    <CardContent className="pt-6">
                      <h3 className="font-medium mb-4">Customize</h3>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Size</label>
                          <Select defaultValue="m">
                            <SelectTrigger>
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="xs">XS</SelectItem>
                              <SelectItem value="s">S</SelectItem>
                              <SelectItem value="m">M</SelectItem>
                              <SelectItem value="l">L</SelectItem>
                              <SelectItem value="xl">XL</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-1 block">Color</label>
                          <div className="flex gap-2">
                            {["bg-black", "bg-white border", "bg-blue-500", "bg-red-500", "bg-green-500"].map(
                              (color, index) => (
                                <div key={index} className={`w-8 h-8 rounded-full cursor-pointer ${color}`} />
                              ),
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-1 block">Fit</label>
                          <Slider defaultValue={[50]} max={100} step={1} className="mb-2" />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Loose</span>
                            <span>Regular</span>
                            <span>Tight</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
