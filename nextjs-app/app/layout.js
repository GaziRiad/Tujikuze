import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { CursorEffect } from "@/components/Cusor";

export const arizonaFlare = localFont({
  src: [
    {
      path: "./fonts/ABCArizonaFlare-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-arizona",
});

export const standard = localFont({
  src: [
    {
      path: "./fonts/standard-book-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-standard",
});

export const metadata = {
  title: "Tujikuze",
  description: "Website for Tujikuze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${arizonaFlare.variable} font-main bg-white text-[#252525] antialiased`}
      >
        <CursorEffect />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
