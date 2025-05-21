import React from "react"
import { Instagram, Mail, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        <h1 className="text-xl font-semibold">Contact Us</h1>
        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="mailto:example@gmail.com"
            className="hover:text-red-500 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Gmail
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 flex items-center gap-2"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2025 Jadara. All rights reserved by Dev Boys.</p>
      </div>
    </footer>
  )
}
