import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "../../../../../auth";

export async function PUT(req: NextRequest) {
  
  const session = await auth();
  try {
    const body = await req.json(); // Ambil data dari body request
    const idSiswa = await session?.user.id;

    console.log("Data diterima:", body);

    const siswa = await prisma.user.findUnique({
      where: {
        id: idSiswa,
      },
    });


    if (!siswa) {
      return NextResponse.json(
        { message: "Siswa tidak ditemukan" },
        { status: 404 }
      );
    }

    const {
   dateOfBirth,
   placeOfBirth,
   major,
   address,
   tahunLulus,
   gender,
   noTelphone
    } = body;

    const saveData = await prisma.user.update({
      where: {
        id: siswa.id,
      },
      data: {
        dateOfBirth,
        major,
        gender,
        placeOfBirth,
        address,
        noTelphone,
        tahunLulus,
      },

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
