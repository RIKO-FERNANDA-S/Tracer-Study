import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "../../../../../auth";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        // Cek apakah user sudah login
        if (!session?.user?.id) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { namaUsaha, penghasilan } = await req.json();

        // Validasi input
        if (!namaUsaha || !penghasilan) {
            return NextResponse.json({ message: "Nama usaha wajib diisi" }, { status: 400 });
        }

        // Simpan data ke database
        const Usaha = await prisma.alumniBerwirausaha.create({
            data: {
                namaUsaha,
                penghasilan,
                user: { connect: { id: session.user.id } }, // Hubungkan ke user yang sedang login
            },
        });

        return NextResponse.json({ message: "Data Usaha berhasil disimpan", data: Usaha }, { status: 201 });

    } catch (error) {
        console.error("Error saat menyimpan data usaha:", error);
        return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
    }
}
