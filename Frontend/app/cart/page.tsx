"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

// Mock data for cart items
const INITIAL_CART_ITEMS = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    size: "M",
    color: "White",
    quantity: 1,
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    size: "32",
    color: "Blue",
    quantity: 1,
  },
  {
    id: 5,
    name: "Leather Jacket",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    size: "L",
    color: "Black",
    quantity: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const shipping = 4.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-24 h-24 relative rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="text-sm text-gray-500 mt-1">
                              <span>Size: {item.size}</span>
                              <span className="mx-2">•</span>
                              <span>Color: {item.color}</span>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                            <div className="text-sm text-gray-500 mt-1">${item.price.toFixed(2)} each</div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-4">
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <div className="h-8 px-3 flex items-center justify-center border-y">{item.quantity}</div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/shop">Continue Shopping</Link>
                </Button>

                <Button variant="ghost" onClick={() => setCartItems([])}>
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                  <Button variant="outline">Apply</Button>
                </div>

                <Button className="w-full" disabled={cartItems.length === 0}>
                  Checkout
                </Button>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Shipping</h3>
                <Select defaultValue="standard">
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Shipping ($4.99)</SelectItem>
                    <SelectItem value="express">Express Shipping ($9.99)</SelectItem>
                    <SelectItem value="overnight">Overnight Shipping ($19.99)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4">
                <h3 className="font-medium mb-2">Payment Method</h3>
                <Select defaultValue="card">
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Credit Card</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="apple">Apple Pay</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
