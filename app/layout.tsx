import type { Metadata } from "next";
import { Kumbh_Sans, Ubuntu } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kumbh-sans",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Ruitao Chen - Product Designer & Developer",
  description: "Portfolio of Ruitao Chen - A Full-Stack designer and developer creating useful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} ${ubuntu.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}