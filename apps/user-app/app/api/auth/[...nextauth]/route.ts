import NextAuth from "next-auth";
import nextConfig from "../../../../next.config.mjs";
import { authOptions } from "../../../config/authOptions";

const handler = NextAuth(authOptions);

export {handler as POST, handler as GET}

