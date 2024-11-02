import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Animal Bazaar",
  description: "Discover Your Perfect Pet!",
};

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      user dashboard sidebar
      {children}
    </div>
  );
}
