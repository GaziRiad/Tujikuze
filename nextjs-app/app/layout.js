import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { sanityFetch } from "@/sanity/client";
import { settingsquery } from "@/sanity/groq";

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

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: settingsquery,
    tags: ["settings"],
  });

  return {
    title: {
      default: data?.defaultTitle || "Welcome — Tijukuze",
    },
    description: data?.description || "Here we cook fashion",
    icons: {
      icon: [data?.imageUrl || "/favicon.png"],
    },
    robots:
      process.env.NEXT_PUBLIC_ENV === "production"
        ? { index: true, follow: true }
        : { index: false, follow: false },
  };
}

export default async function RootLayout({ children }) {
  const data = await sanityFetch({
    query: settingsquery,
    tags: ["settings"],
  });

  if (!data) return null;

  return (
    <html lang="en">
      <body
        className={`${arizonaFlare.variable} ${standard.variable} bg-light-500 font-main text-dark-500 antialiased`}
      >
        <Navigation data={data?.navigation} />
        {children}
      </body>
    </html>
  );
}
