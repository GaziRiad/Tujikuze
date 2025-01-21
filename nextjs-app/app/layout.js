import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const arizonaFlare = localFont({
  src: [
    {
      path: "./fonts/ABCArizonaFlare-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-arizona",
});

export const metadata = {
  title: "Tujikuze",
  description: "Website for Tujikuze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arizonaFlare.variable} font-main antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
