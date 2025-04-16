"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RotateCw } from "lucide-react"

export default function AvatarPreview() {
  const [rotationAngle, setRotationAngle] = useState(0)

  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
      <Image
        src="/placeholder.svg?height=800&width=600"
        alt="Avatar Preview"
        fill
        className="object-cover"
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      />

      {/* Rotation Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm"
          onClick={() => setRotationAngle(rotationAngle - 90)}
        >
          <RotateCw className="h-5 w-5 -scale-x-100" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm"
          onClick={() => setRotationAngle(rotationAngle + 90)}
        >
          <RotateCw className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
