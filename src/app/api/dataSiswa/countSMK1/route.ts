import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {

    const jurusan = ["tkjt", "tbsm", "tp", "tkr"]
    try{
        const total = await prisma.user.count({
            where: {major: {in: jurusan}}
        })
        return NextResponse.json({total})
    }catch(err){
        console.log(err);
    }
}