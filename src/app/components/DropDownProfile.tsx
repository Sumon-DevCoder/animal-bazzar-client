import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { FaSignInAlt } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const DropDownProfile = ({ session }: { session: UserProps | null }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="relative">
      {session?.user ? (
        <>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            <span>Profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <PrimaryButton
          path="/login"
          name="Login"
          icons={<FaSignInAlt className="mr-2" />}
        />
      )}
    </div>
  );
};

export default DropDownProfile;
