"use client"

import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AvatarCustomizer() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Customize Your Avatar</h2>

      <Tabs defaultValue="body">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="body">Body</TabsTrigger>
          <TabsTrigger value="face">Face</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
        </TabsList>

        <TabsContent value="body" className="space-y-4 pt-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Gender</label>
            <Select defaultValue="male">
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Height</label>
            <Slider defaultValue={[170]} min={150} max={200} step={1} className="mb-2" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>150 cm</span>
              <span>175 cm</span>
              <span>200 cm</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Weight</label>
            <Slider defaultValue={[70]} min={40} max={120} step={1} className="mb-2" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>40 kg</span>
              <span>80 kg</span>
              <span>120 kg</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Body Shape</label>
            <Slider defaultValue={[50]} min={0} max={100} step={1} className="mb-2" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Slim</span>
              <span>Average</span>
              <span>Athletic</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="face" className="space-y-4 pt-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Skin Tone</label>
            <div className="flex justify-between gap-2 mb-2">
              {[
                "bg-amber-200",
                "bg-amber-300",
                "bg-amber-400",
                "bg-amber-500",
                "bg-amber-600",
                "bg-amber-700",
                "bg-amber-800",
                "bg-amber-900",
              ].map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer ${color} ${index === 2 ? "ring-2 ring-primary ring-offset-2" : ""}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Face Shape</label>
            <Select defaultValue="oval">
              <SelectTrigger>
                <SelectValue placeholder="Select face shape" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="oval">Oval</SelectItem>
                <SelectItem value="round">Round</SelectItem>
                <SelectItem value="square">Square</SelectItem>
                <SelectItem value="heart">Heart</SelectItem>
                <SelectItem value="diamond">Diamond</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Eye Color</label>
            <div className="flex gap-2 mb-2">
              {["bg-blue-500", "bg-green-500", "bg-amber-500", "bg-gray-500", "bg-gray-800"].map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer ${color} ${index === 0 ? "ring-2 ring-primary ring-offset-2" : ""}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Hair Color</label>
            <div className="flex gap-2 mb-2">
              {["bg-yellow-300", "bg-amber-700", "bg-red-500", "bg-gray-500", "bg-gray-800"].map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer ${color} ${index === 1 ? "ring-2 ring-primary ring-offset-2" : ""}`}
                />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="style" className="space-y-4 pt-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Style Preferences</label>
            <Select defaultValue="casual">
              <SelectTrigger>
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="sporty">Sporty</SelectItem>
                <SelectItem value="bohemian">Bohemian</SelectItem>
                <SelectItem value="minimalist">Minimalist</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Favorite Colors</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {[
                "bg-red-500",
                "bg-blue-500",
                "bg-green-500",
                "bg-yellow-500",
                "bg-purple-500",
                "bg-pink-500",
                "bg-gray-800",
                "bg-white border",
              ].map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer ${color} ${[1, 6].includes(index) ? "ring-2 ring-primary ring-offset-2" : ""}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Occasions</label>
            <Select defaultValue="casual">
              <SelectTrigger>
                <SelectValue placeholder="Select occasion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="work">Work</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Fit Preference</label>
            <Slider defaultValue={[50]} min={0} max={100} step={1} className="mb-2" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Loose</span>
              <span>Regular</span>
              <span>Tight</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
