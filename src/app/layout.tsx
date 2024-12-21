import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "@next/font/google";
import ReduxProvider from "./provider/ReduxProvider";
import TopLoader from "./components/TopLoader";
import ScrollToTopButton from "./components/ScrollTopButton";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Animal Bazaar",
  description: "Discover Your Perfect Pet!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}

      <body>
        <div className="bg-slate-50 dark:bg-gray-800">
          <TopLoader />
          <ScrollToTopButton />
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
