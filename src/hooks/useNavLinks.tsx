import Link from "next/link";
import { usePathname } from "next/navigation";
import useCurrentUserInfo from "./useCurrentUserInfo";

const useNavLinks = () => {
  const pathname = usePathname();
  const { role, email } = useCurrentUserInfo();

  // Define a reusable style function
  const getLinkClass = (path: string) =>
    `p-2 rounded-lg text-slate-800 dark:text-slate-100 ${
      pathname === path
        ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
        : ""
    }`;

  return (
    <>
      <Link href="/" className={getLinkClass("/")}>
        Home
      </Link>
      <Link href="/product" className={getLinkClass("/product")}>
        Products
      </Link>
      <Link href="/about" className={getLinkClass("/about")}>
        About
      </Link>
      <Link href="/contact" className={getLinkClass("/contact")}>
        Contact
      </Link>
      {email && (
        <>
          <Link href="/cart" className={getLinkClass("/cart")}>
            Carts
          </Link>
          <Link
            href="/dashboard/order-history"
            className={getLinkClass("/dashboard/order-history")}
          >
            Order History
          </Link>
        </>
      )}
      {role === "admin" && (
        <Link
          href="/admin-dashboard"
          className={getLinkClass("/admin-dashboard")}
        >
          Dashboard
        </Link>
      )}
      {role === "user" && (
        <Link href="/dashboard" className={getLinkClass("/dashboard")}>
          Dashboard
        </Link>
      )}
    </>
  );
};

export default useNavLinks;
