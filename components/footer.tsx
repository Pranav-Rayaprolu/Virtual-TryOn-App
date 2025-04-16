import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">VirtualTryOn</h3>
            <p className="text-gray-600 mb-4">Try on clothes virtually with our AI-powered avatar creator.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=shirts" className="text-gray-600 hover:text-primary">
                  Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=pants" className="text-gray-600 hover:text-primary">
                  Pants
                </Link>
              </li>
              <li>
                <Link href="/shop?category=dresses" className="text-gray-600 hover:text-primary">
                  Dresses
                </Link>
              </li>
              <li>
                <Link href="/shop?category=outerwear" className="text-gray-600 hover:text-primary">
                  Outerwear
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profile" className="text-gray-600 hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/create-avatar" className="text-gray-600 hover:text-primary">
                  Create Avatar
                </Link>
              </li>
              <li>
                <Link href="/try-on" className="text-gray-600 hover:text-primary">
                  Try On
                </Link>
              </li>
              <li>
                <Link href="/suggestions" className="text-gray-600 hover:text-primary">
                  Suggestions
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 hover:text-primary">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VirtualTryOn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
