import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Animal Bazaar",
  description: "Discover Your Perfect Pet!",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      admin dashboard sidebar
      {children}
    </div>
  );
}
