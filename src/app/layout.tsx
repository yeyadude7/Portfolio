import './globals.css'
import { ReactNode } from 'react'
import Home from '../pages/Home'

export default function RootLayout({ }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-200 text-black dark:bg-zinc-900 dark:text-white">
        <Home />
        <main className="max-w-4xl mx-auto p-4"></main>
      </body>
    </html>
  );
}
