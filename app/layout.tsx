import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eunwoo Choi",
  description: "Welcome to my website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-neutral-900 text-white w-full min-h-screen px-10 lg:px-32">
        {children}
      </body>
    </html>
  );
}
