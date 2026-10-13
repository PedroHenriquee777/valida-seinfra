import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const inter = localFont({
  src:"../assets/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable:"--font-inter",
  weight:"100 900"
});

export const metadata: Metadata = {
  title: "ValidaSEINFRA",
  description: "Sistema de centralização e aprovação de licitações.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}
        <h1 className="font-sans text-5xl font-black tracking-tighter">Inter</h1>
        <h5 className="font-sans text-5x1 font black tracking-tighter">aaa</h5>
      </body>
    </html>
  );
}
