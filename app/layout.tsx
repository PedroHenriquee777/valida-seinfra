import type { Metadata } from "next";
import "./globals.css";
import {inter} from "@/public/fonts";

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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
