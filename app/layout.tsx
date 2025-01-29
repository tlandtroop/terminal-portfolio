import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terminal Portfolio",
  description: "Tyler Landtroop's Terminal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
