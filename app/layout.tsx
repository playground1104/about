import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eunwoo Choi",
  description: "Portfolio of Eunwoo Choi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-neutral-900 w-screen min-h-screen">{children}</body>
    </html>
  );
}
