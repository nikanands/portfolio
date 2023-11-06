import Header from "@/components/Header";
import "./globals.scss";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Footer from "@/components/Footer";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nikhil Anand",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <div className="page_wrapper">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
