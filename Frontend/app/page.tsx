import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Virtual Try-On Hero"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Try Before You Buy, Virtually</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Create your avatar and try on clothes from our collection without leaving your home
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/create-avatar">
              Create Your Avatar <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Upload Photo",
                description: "Upload a clear photo of yourself",
                icon: "📷",
              },
              {
                step: "2",
                title: "Avatar Creation",
                description: "Our AI generates your personalized 3D avatar",
                icon: "🧍",
              },
              {
                step: "3",
                title: "Try Clothes",
                description: "Browse our collection and try clothes on your avatar",
                icon: "👕",
              },
              {
                step: "4",
                title: "View Recommendations",
                description: "Get AI-powered clothing suggestions based on your style",
                icon: "✨",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <div className="h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Realistic Avatars"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Realistic Avatars</h3>
              <p className="text-gray-600">
                Our advanced AI technology creates highly realistic avatars that match your body type, skin tone, and
                features.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Recommendations"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">AI Recommendations</h3>
              <p className="text-gray-600">
                Get personalized clothing recommendations based on your body type, style preferences, and past
                selections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Shopping Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying a more convenient and personalized shopping experience.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/create-avatar">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
