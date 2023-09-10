import { ErrorBoundary } from "react-error-boundary";
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App',
  description: 'List of notes app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <ErrorBoundary fallback={<div>Something went wrong in Layout</div>}>
            <Navbar />
            <div className="mt-8">{children}</div>
          </ErrorBoundary>
        </div>
      </body>
    </html>
  )
}
