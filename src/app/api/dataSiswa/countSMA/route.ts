import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {

    try{
        const total = await prisma.user.count({
            where: {major: "sma"}
        })
        return NextResponse.json({total})
    }catch(err){
        console.log(err);
    }
}