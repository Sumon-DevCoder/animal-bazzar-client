"use client";

import DropdownProfile from "@/app/components/DropDownProfile";
import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
// import CheckUserInfo from "@/components/CheckUserRole/CheckUserInfo";

const Navbar = () => {
  // const { isAdmin, isVerifiedUser } = CheckUserInfo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAdmin = true;
  const isVerifiedUser = true;

  const handlehrefggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Links = (
    <>
      <Link
        href="/"
        className="border-2 border-indigo-500 p-2 rounded-lg text-indigo-500"
      >
        Home
      </Link>
      <Link
        href="/product"
        className="border-2 border-indigo-500 p-2 rounded-lg text-indigo-500"
      >
        Products
      </Link>

      <Link
        href="/about"
        className="border-2 border-indigo-500 p-2 rounded-lg text-indigo-500"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="border-2 border-indigo-500 p-2 rounded-lg text-indigo-500"
      >
        Contact
      </Link>
      <Link
        href="/cart"
        className="border-2 border-indigo-500 p-2 rounded-lg text-indigo-500"
      >
        Carts
      </Link>
      {isAdmin && (
        <Link
          href="/admin/dashboard"
          className="border-2 border-indigo-500 p-2 rounded-lg text-indigo-500"
        >
          Dashboard
        </Link>
      )}
      {isVerifiedUser && (
        <Link
          href="/user/dashboard"
          className="border-2 border-indigo-500 p-2 rounded-lg text-indigo-500"
        >
          User Dashboard
        </Link>
      )}
    </>
  );

  return (
    <div className="sticky hrefp-0 z-50">
      <div className="navbar bg-white shadow-lg px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="buthrefn"
              className="btn btn-ghost lg:hidden"
              onClick={handlehrefggleMenu}
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1"
              >
                {Links}
              </ul>
            )}
          </div>
          <Link
            href={`/`}
            className="btn btn-ghost text-lg md:text-xl bg-gradient-href-r from-indigo-500"
          >
            Animal Bazaar
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 font-semibold text-base">
            {Links}
          </ul>
        </div>
        <div className="navbar-end cursor-pointer">
          <DropdownProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
