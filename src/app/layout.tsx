import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "../components/dashboard/AuthSession";
import { Toaster } from "react-hot-toast";

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
        <Toaster position="top-right" />
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
