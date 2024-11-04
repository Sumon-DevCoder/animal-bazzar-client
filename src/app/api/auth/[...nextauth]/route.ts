// /* eslint-disable @typescript-eslint/no-explicit-any */
// import nexiosInstance from "nexios-http";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { cookies } from "next/headers";

import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],

//   callbacks: {
//     async signIn({ profile, account }: any) {
//       try {
//         console.log({ profile, account });

//         if (!profile || !account) {
//           return false;
//         }

//         if (account?.provider === "google") {
//           const response = await nexiosInstance.post("/auth/login", {
//             name: profile.name,
//             email: profile.email,
//             img: profile.picture,
//           });

//           console.log(response.data);

//           if (
//             response?.data?.data?.accessToken ||
//             response?.data?.data?.accessToken
//           ) {
//             (await cookies()).set(
//               "accessToken",
//               response?.data?.data?.accessToken
//             );

//             return true;
//           } else {
//             return false;
//           }
//         } else {
//           return false;
//         }
//       } catch (error) {
//         console.log(error);
//         return false;
//       }
//     },
//   },

//   pages: {
//     signIn: "/login",
//   },

//   secret: process.env.NEXTAUTH_SECRET as string,
// });

// export { handler as GET, handler as POST };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
