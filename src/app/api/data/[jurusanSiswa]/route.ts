import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";




export async function GET(req: NextRequest, {params} : {params : {jurusanSiswa: string}}) {

  const {jurusanSiswa} = await params

  if (!jurusanSiswa) {
    return new NextResponse(JSON.stringify({ error: "tidak aman bro"}), {
      status: 400,
    });
  }

    try {
        const users = await prisma.user.findMany({
          where: {
            major: jurusanSiswa,
            role: "user"
          }
        });
        
        return NextResponse.json(users)
    } catch (error) {
        return ({message: "error", status: 500})
    }
}

export async function POST() {
    try{

    }catch(error){
        return({message: "error", status: 500})
    }
}