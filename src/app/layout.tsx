// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Kensley Cadet | Portfolio",
  description: "Crafting Code, Context, and Creativity",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-200 text-black dark:bg-zinc-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
