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

        const { tempatKerja, alamat, penghasilan, jabatan, statusPekerjaan } = await req.json();

        // Validasi input
        if (!tempatKerja || !alamat) {
            return NextResponse.json({ message: "Nama pekerjaan dan alamat wajib diisi" }, { status: 400 });
        }

        // Simpan data ke database
        const bekerja = await prisma.alumniBekerja.create({
            data: {
                tempatKerja,
                alamat,
                penghasilan,
                jabatan,
                statusPekerjaan,
                user: { connect: { id: session.user.id } }, 
            },
        });

        return NextResponse.json({ message: "Data bekerja berhasil disimpan", data: bekerja }, { status: 201 });

    } catch (error) {
        console.error("Error saat menyimpan data kuliah:", error);
        return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
    }
}
