import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

// GET: Ambil daftar user berdasarkan tahun
export async function GET(req: Request) {
  const url = new URL(req.url);
  const tahun = Number(url.searchParams.get("tahun"));

  // Validasi tahun
  if (isNaN(tahun)) {
    return NextResponse.json({ error: "Tahun tidak valid" }, { status: 400 });
  }

  try {
    const users = await prisma.user.findMany({
      where: { tahunLulus: tahun.toString() }, // Konversi tahun ke string untuk query
      select: { id: true, name: true, email: true },
    });

    // Jika tidak ada data yang ditemukan
    if (users.length === 0) {
      return NextResponse.json(
        { message: "Tidak ada data yang ditemukan" },
        { status: 404 }
      );
    }

    // Kirim response
    return NextResponse.json(users);
  } catch (err) {
    console.error("Error fetching data:", err); // Log error untuk debugging
    return NextResponse.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}

// POST: Unduh data user sebagai file Excel berdasarkan tahun
export async function POST(req: Request) {
  const { tahun } = await req.json();

  // Validasi tahun
  if (isNaN(tahun)) {
    return NextResponse.json({ error: "Tahun tidak valid" }, { status: 400 });
  }

  try {
    const users = await prisma.user.findMany({
      where: { tahunLulus: tahun.toString() }, // Konversi tahun ke string untuk query
      select: { 
        name: true,
        nik: true,
        placeOfBirth: true,
        dateOfBirth: true,
        major: true,
        gender: true,
        email: true,
        noTelphone: true,
        address: true,
        tahunLulus: true,
        status: true,
        whatStatus: true,
        whereStatus: true,
        bossName: true,
        bossPosition: true,
        startStatus: true,
        salary: true,
        relevance: true
      },
    });

    // Jika tidak ada data yang ditemukan
    if (users.length === 0) {
      return NextResponse.json(
        { error: "Tidak ada data untuk tahun ini" },
        { status: 404 }
      );
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
    console.error("Error downloading data:", err); // Log error untuk debugging
    return NextResponse.json(
      { error: "Gagal mengunduh data" },
      { status: 500 }
    );
  }
}