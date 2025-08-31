import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Suspense } from "react";
import Loading from "@/src/components/Loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading display={true} fixHeight={true} />}>
        {children}
      </Suspense>
      <Footer />
    </div>
  );
}
