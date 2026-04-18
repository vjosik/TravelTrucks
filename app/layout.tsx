import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import QueryProvider from "../providers/QueryProvider";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks | Rent your perfect campervan",
  description:
    "Discover the freedom of the road with TravelTrucks. Rent comfortable campervans for your next unforgettable adventure in Ukraine.",
  keywords: [
    "campervan rental",
    "travel trucks",
    "rent camper Ukraine",
    "road trip",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        <QueryProvider>
          <Header />

          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
