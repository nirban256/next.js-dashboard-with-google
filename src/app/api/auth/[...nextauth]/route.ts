// This file is used to handle authentication with NextAuth.js
// It uses Google as the authentication provider

import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
