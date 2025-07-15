import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sourav Debnath Portfolio",
  description: "Sourav Debnath",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
