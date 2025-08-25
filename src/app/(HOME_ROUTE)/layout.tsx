import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
/*

    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>


*/
