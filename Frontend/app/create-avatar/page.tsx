import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AvatarUploader from "@/components/avatar-uploader"
import AvatarCustomizer from "@/components/avatar-customizer"
import AvatarPreview from "@/components/avatar-preview"

export default function CreateAvatarPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Create Your Avatar</h1>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="upload">Upload Photo</TabsTrigger>
          <TabsTrigger value="customize">Customize</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <AvatarUploader />
              </CardContent>
            </Card>

            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold mb-4">Tips for a Great Avatar</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    1
                  </span>
                  <span>Use a photo with good lighting and a clear view of your face and body</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    2
                  </span>
                  <span>Stand facing forward with your arms slightly away from your body</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    3
                  </span>
                  <span>Use a plain background for best results</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    4
                  </span>
                  <span>Wear fitted clothing to help our AI accurately determine your body shape</span>
                </li>
              </ul>

              <div className="mt-auto">
                <Button className="w-full" size="lg" disabled>
                  Continue to Customization
                </Button>
                <p className="text-sm text-gray-500 mt-2 text-center">Upload a photo to continue</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="customize">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AvatarPreview />
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  <AvatarCustomizer />
                </CardContent>
              </Card>

              <div className="mt-6">
                <Button asChild className="w-full" size="lg">
                  <a href="/try-on">Continue to Try-On</a>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
