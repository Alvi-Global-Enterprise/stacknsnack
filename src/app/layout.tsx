import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Preloader from "@/components/Preloader";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Brianna's Stack N Snack | Crunchy Fun in Every Bite",
  description:
    "Tasty chips, treats and drinks made for kids, families and snack lovers everywhere!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
