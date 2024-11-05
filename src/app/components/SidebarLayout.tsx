"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useCurrentUserInfo from "../../hooks/useCurrentUserInfo";

const AdminSidebar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { isAdmin } = useCurrentUserInfo();

  // Define links outside the conditional block
  const links = isAdmin
    ? [
        { name: "Dashboard", path: "/admin/dashboard" },
        {
          name: "Products",
          subLinks: [
            { name: "Create Product", path: "/admin-dashboard/create-product" },
            { name: "Product List", path: "/admin-dashboard/product-list" },
          ],
        },
        { name: "Orders", path: "/admin/orders" },
        { name: "UserManagement", path: "/admin-dashboard/user-management" },
        { name: "Settings", path: "/admin/settings" },
      ]
    : [
        { name: "Dashboard", path: "/user/dashboard" },
        { name: "My Bookings", path: "/user/my-bookings" },
        { name: "Orders", path: "/user/orders" },
        { name: "Users", path: "/user/users" },
        { name: "Settings", path: "/user/settings" },
      ];

  return (
    <div className="sticky top-0 z-10 ">
      <aside className="w-64 bg-gray-800 text-white shadow-md h-[100vh]">
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </div>
        <nav className="mt-4">
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                {link.subLinks ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >
                      {link.name}
                      {isDropdownOpen ? (
                        <FaChevronUp className="w-5 h-5" />
                      ) : (
                        <FaChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <ul
                      className={`ml-4 mt-2 transition-max-height duration-300 ease-in-out ${
                        isDropdownOpen ? "max-h-40" : "max-h-0 overflow-hidden"
                      }`}
                    >
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            href={subLink.path}
                            className={`block px-4 py-2 hover:bg-gray-700 transition-colors duration-200 ${
                              pathname === subLink.path ? "bg-gray-700" : ""
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className={`block px-4 py-2 hover:bg-gray-700 transition-colors duration-200 ${
                      pathname === link.path ? "bg-gray-700" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default AdminSidebar;
