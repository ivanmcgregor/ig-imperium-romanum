import localFont from "next/font/local";
import { Spectral } from "next/font/google";
import classNames from "classnames";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import "./globals.scss";

const headlineFont = localFont({
  src: "./SPQR.ttf.woff",
  variable: "--headings-font-family",
  display: "swap",
});

const defaultFont = Spectral({
  subsets: ["latin"],
  variable: "--font-family-base",
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(defaultFont.variable, headlineFont.variable)}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
