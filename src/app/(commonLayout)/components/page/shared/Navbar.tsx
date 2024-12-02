/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import DropdownProfile from "@/app/components/DropDownProfile";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logoImg from "../../../../../../public/assets/animal_logo.jpg";
import Image from "next/image";
import Link from "next/link";
import useCurrentUserInfo from "../../../../../hooks/useCurrentUserInfo";
import useDarkMode from "@/hooks/useDarkMode";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isAdmin, isVerifiedUser } = useCurrentUserInfo();
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Links = (
    <>
      <Link
        href="/"
        className={`p-2 rounded-lg text-slate-800 dark:text-slate-100 ${
          pathname === "/"
            ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
            : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/product"
        className={`p-2 rounded-lg text-slate-800 dark:text-slate-100 ${
          pathname === "/product"
            ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
            : ""
        }`}
      >
        Products
      </Link>
      <Link
        href="/about"
        className={`p-2 rounded-lg text-slate-800 dark:text-slate-100 ${
          pathname === "/about"
            ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
            : ""
        }`}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={`p-2 rounded-lg text-slate-800 dark:text-slate-100 ${
          pathname === "/contact"
            ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
            : ""
        }`}
      >
        Contact
      </Link>
      <Link
        href="/cart"
        className={`p-2 rounded-lg text-slate-800 dark:text-slate-100 ${
          pathname === "/cart"
            ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
            : ""
        }`}
      >
        Carts
      </Link>
      <Link
        href="/dashboard/order-history"
        className={`p-2 rounded-lg text-slate-800 dark:text-slate-100 ${
          pathname === "/about"
            ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
            : ""
        }`}
      >
        Order History
      </Link>
      {isAdmin && (
        <Link
          href="/admin-dashboard"
          className={`p-2 rounded-lg text-slate-200 dark:text-slate-100 ${
            pathname === "/admin-dashboard"
              ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
              : ""
          }`}
        >
          Dashboard
        </Link>
      )}
      {isVerifiedUser && (
        <Link
          href="/dashboard"
          className={`p-2 rounded-lg text-slate-200 dark:text-slate-100 ${
            pathname === "/dashboard"
              ? "text-orange-400 border-orange-600 dark:text-orange-300 dark:border-orange-500"
              : ""
          }`}
        >
          Dashboard
        </Link>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar md:px-5 text-white dark:bg-gray-800 bg-gray-100 bg-opacity-50">
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
                  className="h-5 w-5 dark:text-white text-black"
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
            {/* small navlinks */}
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-50 dark:bg-gray-600  rounded-box z-[1] mt-3 w-52 p-2  gap-1 shadow-lg"
              >
                {Links}
              </ul>
            )}
          </div>
          <Link
            href={`/`}
            className="text-lg flex items-center space-x-2 p-2  md:text-xl"
          >
            <Image
              className="h-5 md:h-7 w-5 md:w-7"
              src={logoImg}
              alt="Animal Bazaar Logo"
            />
            <span className="text-[16px] md:text-2xl text-green-600 mt-1">
              Animal Bazaar
            </span>
          </Link>
        </div>
        {/* lg navlink */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 font-semibold text-base ">
            {Links}
          </ul>
        </div>

        <div className="navbar-end space-x-4 cursor-pointer">
          {/* dark mode setup  */}
          <input
            type="checkbox"
            className="peer sr-only opacity-0"
            id="toggleDarkMode"
          />
          <label
            htmlFor="toggleDarkMode"
            onClick={toggleDarkMode}
            className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
          >
            <span className="sr-only">Enable</span>
          </label>
          <DropdownProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
