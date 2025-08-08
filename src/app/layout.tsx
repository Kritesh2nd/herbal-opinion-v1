import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Herbal Opinion",
  description: "Your Natural Path",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
