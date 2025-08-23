import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>by Saksh Menon</span>
          </p>
          {/* © 2025 Saksh Menon. All rights reserved. */}
        </div>
      </div>
    </footer>
  )
}