import CredentialsProvider from "next-auth/providers/credentials"
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
import bcrpyt from 'bcrypt';
import db from '@repo/db/client';
import { signIn } from "next-auth/react";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "1234567890" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {

                const hashedPassword = await bcrpyt.hash(credentials?.password, 10);
                const existingUser = await db.user.findUnique({
                    where: { phone: credentials?.phone }
                })

                if (existingUser) {
                    const passwordValidation = await bcrpyt.compare(credentials?.password, existingUser?.password)

                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email
                        }
                    }
                    return null;
                }

                try {
                    const user = await db.user.create({
                        data: {
                            phone: credentials?.phone,
                            password: hashedPassword,
                        }
                    });

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }
                } catch (error) {
                    console.error(error);
                }

                return null;
            }
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID || "",
        //     clientSecret: process.env.GOOGLE_SECRET || ""
        // }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID || "",
        //     clientSecret: process.env.GITHUB_SECRET || "",
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token, user }: any) {
            if (session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    pages: {
        signIn: '/signin',
    }
}