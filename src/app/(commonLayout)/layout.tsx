import type { Metadata } from "next";
import Navbar from "./components/page/shared/Navbar";

export const metadata: Metadata = {
  title: "Animal Bazaar",
  description: "Discover Your Perfect Pet!",
};

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <footer />
    </div>
  );
}
