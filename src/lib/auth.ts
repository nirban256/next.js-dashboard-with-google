// This function retrieves the current authentication session using NextAuth.
// It uses the getServerSession function from NextAuth and the authOptions defined in the authentication route. 

import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export const getAuthSession = () => getServerSession(authOptions);