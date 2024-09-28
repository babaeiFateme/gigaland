import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/partials/footer/Footer";
import Header from "@/components/partials/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "giga",
  description: "giga site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-900 `}>
        <Header />
        <main className="mx-4 mt-[100px] md:mt-[80px] lg:mt-[4px] md:mx-auto min-h-screen sm:p-10 md:p-16 lg:p-24 lg:pt-36">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
