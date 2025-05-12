import type { Metadata, Viewport } from "next";
import { Inter, Rye, Andika } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";

import { ThemeProvider } from "./provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: '--font-rye',
});

const andika = Andika({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: '--font-andika',
});

export const viewport: Viewport = {
  themeColor: "#000319",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en" className={`${rye.variable} ${andika.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
