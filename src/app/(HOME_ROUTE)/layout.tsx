import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Suspense fallback={<div className="p-25 text-center">Loading...</div>}>
        {children}
      </Suspense>
      <Footer />
    </div>
  );
}
