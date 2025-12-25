import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../providers/themes-provider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CursorTrail from "@/components/effects/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Djembar Arafat",
  description: "Web Design & Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="hidden lg:block">
            <CursorTrail />
          </div>

          <div className="flex min-h-screen flex-col">
            <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8 flex-1 flex flex-col">
              <Navbar />

              <main className="grow m-4">
                {children}
              </main>

              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
