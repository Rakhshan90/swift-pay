import { getServerSession } from "next-auth";
import { authOptions } from "../../config/authOptions";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        const session = await getServerSession(authOptions);
        if (session && session.user) {
            return NextResponse.json({
                user: session.user
            })
        }
        else {
            return NextResponse.json({
                message: "You are not logged in",
            }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({
            message: "You are not logged in",
        }, { status: 401 })
    }
}