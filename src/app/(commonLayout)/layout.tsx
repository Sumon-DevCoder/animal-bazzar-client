import type { Metadata } from "next";
import Navbar from "./components/page/shared/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export const metadata: Metadata = {
  title: "Animal Bazaar",
  description: "Discover Your Perfect Pet!",
};

export default async function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar session={session} />
      {children}
      <footer />
    </div>
  );
}
