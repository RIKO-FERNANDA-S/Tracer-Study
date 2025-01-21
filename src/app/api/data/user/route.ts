import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";




export async function GET() {
    try {
        const users = await prisma.dataUser.findMany();
        return NextResponse.json(users)
    } catch (error) {
       
            return({message: "error", status: 500})
        
    }
}