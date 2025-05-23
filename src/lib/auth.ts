// This function retrieves the current authentication session using NextAuth.
// It uses the getServerSession function from NextAuth and the authOptions defined in the authentication route. 

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/app/api/auth/[...nextauth]/route";

export const getAuthSession = () => getServerSession(authOptions);