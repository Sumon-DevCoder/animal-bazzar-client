/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Link from "next/link";
import { logout } from "@/redux/features/auth/authSlice";
import { FaSignInAlt, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import useCurrentUserData from "../../hooks/useCurrentUserInfoData";
import Image from "next/image";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";

const DropDownProfile = () => {
  const { currentUserInfo: user } = useCurrentUserData();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();

  // toggle
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      toast.success("Logout Successful");
    } catch (err: any) {
      toast.error("Logout Failed. Please try again.");
    }
  };

  return (
    <div className="relative">
      {user ? (
        <>
          <button onClick={toggleDropdown} className="">
            <div className="avatar flex justify-center">
              {user?.img ? (
                <Image
                  src={user?.img}
                  alt="User image"
                  width={33}
                  height={33}
                  className="rounded-full"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaUserCircle className="mr-2" />
                {user?.name}
              </Link>
              <Link
                href="/profile"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaUserCircle className="mr-2" />
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaSignOutAlt className="mr-2" />
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
