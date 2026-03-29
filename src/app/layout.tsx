import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/lib/auth";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FusionHub — The Fusion Energy Community",
  description:
    "Join the world's leading community for fusion energy enthusiasts, researchers, and advocates. Stay informed, connect with peers, and shape the future of clean energy.",
  keywords: ["fusion energy", "nuclear fusion", "clean energy", "ITER", "tokamak", "plasma physics"],
  openGraph: {
    title: "FusionHub — The Fusion Energy Community",
    description: "Join the world's leading community for fusion energy enthusiasts and researchers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
