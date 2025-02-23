import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name        ,
      nik         ,
      placeOfBirth,
      dateOfBirth  ,
      gender      ,
      tahunLulus  ,
      major       ,
      address     ,
      noTelphone  ,
      email       ,       
      status      ,
      startStatus ,
      whatStatus  ,
      whereStatus ,
      relevance   ,
      bossName    ,
      bossPosition,
      salary      ,
    } = body;

    const saveData = await prisma.user.create({
      data: {
        name        ,
        nik         ,
        placeOfBirth,
        dateOfBirth  ,
        gender      ,
        tahunLulus  ,
        major       ,
        address     ,
        noTelphone  ,
        email       ,       
        status      ,
        startStatus ,
        whatStatus  ,
        whereStatus ,
        relevance   ,
        bossName    ,
        bossPosition,
        salary      ,
      }
    });

    return NextResponse.json(
      { message: "Data berhasil diterima", saveData },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Terjadi kesalahan", err },
      { status: 500 }
    );
    
  }
}

export async function GET() {
  
  try {
    const user = await prisma.user.findMany({
      where: { role: "user" }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch user", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.user.delete({ where: { id } });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 500,
    });
  }
}
