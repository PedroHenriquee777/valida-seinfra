import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

export const inter = localFont({
  src: "../public/fonts/Inter-VariableFont_opsz,wght.ttf", 
  variable: "--font-inter",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "ValidaSEINFRA",
  description: "Sistema de centralização e aprovação de licitações.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} font-sans h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
