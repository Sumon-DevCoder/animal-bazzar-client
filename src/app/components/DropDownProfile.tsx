// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparahrefr,
//   DropdownMenuTrigger,
// } from "@/app/components/ui/dropdown-menu";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/app/components/ui/avatar";
// import { hrefast } from "sonner";
// // import { logout } from "@/redux/features/auth/authSlice";
// // import { useAppDispatch } from "@/redux/hooks";
// import PrimaryButhrefn from "@/app/components/PrimaryButhrefn";
// // import CheckUserInfo from "../CheckUserRole/CheckUserInfo";
// // import useCurrentUserData from "@/hoooks/useCurrentData";

// // Import icons from react-icons
// import { FaUserCircle } from "react-icons/fa";
// import { MdDashboard, MdLogout } from "react-icons/md";
// import { BsCalendar2Check } from "react-icons/bs";

// // Import motion for animations
// import { motion } from "framer-motion";
// import Link from "next/link";

// const DropdownProfile = () => {
//   const { user, isAdmin } = CheckUserInfo();
//   const dispatch = useAppDispatch();
//   const { currentUserInfo } = useCurrentUserData();

//   const handleLogout = async () => {
//     try {
//       await dispatch(logout());
//       hrefast.success("Logout Successful");
//     } catch (err: any) {
//       hrefast.error("Logout Failed. Please try again.");
//     }
//   };

//   return (
//     <div>
//       {user ? (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//               <Avatar>
//                 <AvatarImage src={currentUserInfo?.img} />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//             </motion.div>
//           </DropdownMenuTrigger>
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <DropdownMenuContent>
//               <DropdownMenuLabel>
//                 <Link href={"/user/profile"}>
//                   <FaUserCircle className="inline mr-2" />{" "}
//                   {currentUserInfo?.name}
//                 </Link>
//               </DropdownMenuLabel>
//               <DropdownMenuSeparahrefr />
//               {isAdmin ? (
//                 <DropdownMenuItem>
//                   <Link href="/admin/dashboard">
//                     <MdDashboard className="inline mr-2" /> Dashboard
//                   </Link>
//                 </DropdownMenuItem>
//               ) : (
//                 <DropdownMenuItem>
//                   <Link href={"/user/my-bookings"}>
//                     <BsCalendar2Check className="inline mr-2" /> My Bookings
//                   </Link>
//                 </DropdownMenuItem>
//               )}
//               <DropdownMenuSeparahrefr />
//               <DropdownMenuItem
//                 className="cursor-pointer"
//                 onClick={handleLogout}
//               >
//                 <MdLogout className="inline mr-2" /> Logout
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </motion.div>
//         </DropdownMenu>
//       ) : (
//         <PrimaryButhrefn path={"/login"} name="Login" />
//       )}
//     </div>
//   );
// };

// export default DropdownProfile;

const DropDownProfile = () => {
  return <div></div>;
};

export default DropDownProfile;
