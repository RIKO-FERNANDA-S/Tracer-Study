import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

// GET: Ambil daftar user berdasarkan tahun
export async function GET(req: Request) {
  const url = new URL(req.url);
  const tahun = Number(url.searchParams.get("tahun"));

  if (!tahun) {
    return NextResponse.json({ error: "Tahun tidak valid" }, { status: 400 });
  }

  try {
    const users = await prisma.user.findMany({
      where: { tahunLulus: tahun },
      select: { id: true, name: true, email: true,  },
    });

    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

// POST: Unduh data user sebagai file Excel berdasarkan tahun
export async function POST(req: Request) {
  const { tahun } = await req.json();

  if (!tahun) {
    return NextResponse.json({ error: "Tahun tidak valid" }, { status: 400 });
  }

  try {
    const users = await prisma.user.findMany({
      where: { tahunLulus: tahun },
      select: { name: true, email: true, tahunLulus: true, alumniBekerja: true },
    });

    if (users.length === 0) {
      return NextResponse.json({ error: "Tidak ada data untuk tahun ini" }, { status: 404 });
    }

    // Buat file Excel
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Alumni");

    const excelBuffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new NextResponse(excelBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename="alumni-${tahun}.xlsx"`,
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Gagal mengunduh data" }, { status: 500 });
  }
}
