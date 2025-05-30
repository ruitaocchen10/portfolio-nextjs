import type { Metadata } from "next";
import { Kumbh_Sans, Ubuntu } from "next/font/google";
import "./globals.css";

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
  title: "Portfolio",
  description: "My personal portfolio",
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
      </body>
    </html>
  );
}