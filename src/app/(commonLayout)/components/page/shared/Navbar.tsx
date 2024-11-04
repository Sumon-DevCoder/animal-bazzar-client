"use client";

import DropdownProfile from "@/app/components/DropDownProfile";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logoImg from "../../../../../../public/assets/animal_logo.jpg";
import Image from "next/image";
import Link from "next/link";

// type
type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const isAdmin = true; // Replace with your actual logic
  const isVerifiedUser = true; // Replace with your actual logic

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Links = (
    <>
      <Link
        href="/"
        className={`p-2 rounded-lg text-slate-200 ${
          pathname === "/" ? "text-lime-500" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/product"
        className={`p-2 rounded-lg text-slate-200 ${
          pathname === "/product" ? "text-lime-500" : ""
        }`}
      >
        Products
      </Link>
      <Link
        href="/about"
        className={`p-2 rounded-lg text-slate-200 ${
          pathname === "/about" ? "text-lime-500" : ""
        }`}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={`p-2 rounded-lg text-slate-200 ${
          pathname === "/contact" ? "text-lime-500" : ""
        }`}
      >
        Contact
      </Link>
      <Link
        href="/cart"
        className={`p-2 rounded-lg text-slate-200 ${
          pathname === "/cart" ? "text-lime-500" : ""
        }`}
      >
        Carts
      </Link>
      {isAdmin && (
        <Link
          href="/admin-dashboard"
          className={`p-2 rounded-lg text-slate-200 ${
            pathname === "/admin-dashboard" ? "text-lime-500" : ""
          }`}
        >
          Dashboard
        </Link>
      )}
      {isVerifiedUser && (
        <Link
          href="/admin-dashboard"
          className={`p-2 rounded-lg text-slate-200 ${
            pathname === "/admin-dashboard" ? "text-lime-500" : ""
          }`}
        >
          User Dashboard
        </Link>
      )}
    </>
  );

  return (
    <div className="sticky hrefp-0 z-50">
      <div className="navbar bg-slate-800 shadow-lg px-5 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleToggleMenu}
            >
              {isMenuOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-600  rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1"
              >
                {Links}
              </ul>
            )}
          </div>
          <Link
            href={`/`}
            className="btn btn-ghost text-lg md:text-xl bg-gradient-href-r from-slate-200"
          >
            <Image className="h-7 w-7" src={logoImg} alt="Animal Bazaar Logo" />
            <span className="text-2xl mt-1">Animal Bazaar</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 font-semibold text-base">
            {Links}
          </ul>
        </div>
        <div className="navbar-end cursor-pointer">
          <DropdownProfile session={session} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
