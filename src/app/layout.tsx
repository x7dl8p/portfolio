import CursorDot from "@/components/CursorDot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavigationTracker from "@/components/NavigationTracker";
import ParticlesBackground from "@/components/ParticlesBackground";
import PointsCounter from "@/components/PointsCounter";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mohammad's Portfolio ",
  description: "My personal site to showcase my developer work and opinions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}
      >
        <Providers>
          <ParticlesBackground />
          <NavigationTracker />
          <Header />
          <main className="mx-auto w-full max-w-3xl grow px-8">{children}</main>
          <Footer />
          <PointsCounter />
          <CursorDot />
        </Providers>
      </body>
    </html>
  );
}
