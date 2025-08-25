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
        <AuthSession>{children}</AuthSession>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
