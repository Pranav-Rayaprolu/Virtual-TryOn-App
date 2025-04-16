"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Edit, LogOut, User, Plus } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="User Avatar" fill className="object-cover" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary text-white"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>

                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500">john.doe@example.com</p>

                <Button variant="outline" className="mt-6 w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Account Navigation</h3>
                <nav className="space-y-1">
                  {[
                    { name: "Profile Information", icon: User, active: true },
                    { name: "Orders", icon: User, active: false },
                    { name: "Saved Outfits", icon: User, active: false },
                    { name: "Preferences", icon: User, active: false },
                    { name: "Payment Methods", icon: User, active: false },
                    { name: "Addresses", icon: User, active: false },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className={`flex items-center px-3 py-2 text-sm rounded-md ${
                        item.active ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="info">
            <TabsList className="w-full">
              <TabsTrigger value="info">Profile Information</TabsTrigger>
              <TabsTrigger value="avatars">Your Avatars</TabsTrigger>
              <TabsTrigger value="orders">Order History</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Personal Information</h2>
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? "Cancel" : "Edit"}
                    </Button>
                  </div>

                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">First Name</label>
                          <Input defaultValue="John" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Last Name</label>
                          <Input defaultValue="Doe" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block">Email</label>
                        <Input defaultValue="john.doe@example.com" />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block">Phone</label>
                        <Input defaultValue="(123) 456-7890" />
                      </div>

                      <Button>Save Changes</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                          <p>John</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                          <p>Doe</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                        <p>john.doe@example.com</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                        <p>(123) 456-7890</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Style Preferences</h2>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Body Type</h3>
                      <p>Athletic</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Style Preferences</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Casual</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Modern</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Minimalist</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Favorite Colors</h3>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500" />
                        <div className="w-6 h-6 rounded-full bg-gray-800" />
                        <div className="w-6 h-6 rounded-full bg-white border" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Occasions</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Casual</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Work</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">Evening</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="avatars" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Your Avatars</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border rounded-lg overflow-hidden">
                        <div className="aspect-[3/4] relative">
                          <Image
                            src={`/placeholder.svg?height=400&width=300`}
                            alt={`Avatar ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">Avatar {i}</h3>
                          <p className="text-sm text-gray-500 mt-1">Created on {new Date().toLocaleDateString()}</p>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline" className="flex-1">
                              Edit
                            </Button>
                            <Button size="sm" className="flex-1">
                              Try On
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="border rounded-lg overflow-hidden border-dashed flex flex-col items-center justify-center p-6 h-full">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <Plus className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-center">Create New Avatar</h3>
                      <p className="text-sm text-gray-500 text-center mt-1">
                        Upload a new photo to create another avatar
                      </p>
                      <Button className="mt-4">Create Avatar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Order History</h2>

                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row justify-between mb-4">
                          <div>
                            <h3 className="font-medium">Order #{1000 + i}</h3>
                            <p className="text-sm text-gray-500">Placed on {new Date().toLocaleDateString()}</p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4">
                          {[1, 2, 3].map((j) => (
                            <div key={j} className="w-16 h-16 relative rounded-md overflow-hidden">
                              <Image
                                src={`/placeholder.svg?height=100&width=100`}
                                alt={`Product ${j}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="font-medium">Total: ${(99.99 * i).toFixed(2)}</div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                            <Button size="sm">Buy Again</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
