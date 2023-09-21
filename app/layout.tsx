import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { Sidebar } from 'lucide-react'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Server Management',
  description: 'Server management tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <Navbar />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
