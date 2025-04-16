"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Upload } from "lucide-react"

export default function AvatarUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // Create preview
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleUpload = () => {
    if (!file) return

    setUploading(true)
    setProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
        {preview ? (
          <Image src={preview || "/placeholder.svg"} alt="Avatar preview" fill className="object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">Upload your photo</h3>
            <p className="text-sm text-gray-500 mb-4">
              For best results, use a photo where you're facing forward with a clear background
            </p>
          </div>
        )}
      </div>

      {uploading && (
        <div className="w-full mb-4">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-center mt-2">{progress < 100 ? "Uploading..." : "Processing your avatar..."}</p>
        </div>
      )}

      <div className="flex gap-4 w-full">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => {
            setFile(null)
            setPreview(null)
            setProgress(0)
          }}
          disabled={!file || uploading}
        >
          Clear
        </Button>

        {file ? (
          <Button className="flex-1" onClick={handleUpload} disabled={uploading}>
            {uploading ? "Processing..." : "Create Avatar"}
          </Button>
        ) : (
          <Button asChild className="flex-1">
            <label>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              Select Photo
            </label>
          </Button>
        )}
      </div>
    </div>
  )
}
