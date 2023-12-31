import Header from "@/components/layout/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "خانه بتنی",
  description: "شرکت مهندسی خانه بتنی",
  icons: { icon: "./icon-512x512.png" }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      </head>
      <body className={inter.className}>
        <header>
          <Header>{children}</Header>
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
