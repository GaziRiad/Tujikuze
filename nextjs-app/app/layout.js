import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

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
        className={`${arizonaFlare.variable} ${standard.variable} bg-light-500 font-main text-dark-500 antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
