import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "../../../../auth";

export async function PUT(req: NextRequest) {
  console.log("Received PUT request");
  const session = await auth();
  try {
    const body = await req.json();
    const idSiswa = await session?.user.id;

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
      noTelphone,
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

export async function GET() {
  const session = await auth();

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findMany({
      where: { id: session?.user.id },
      include: {
        alumniKuliah: true,
        alumniBekerja: true,
        alumniWirausaha: true,
      },
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
