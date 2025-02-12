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

        const { namaKuliah, alamat } = await req.json();

        // Validasi input
        if (!namaKuliah || !alamat) {
            return NextResponse.json({ message: "Nama kuliah dan alamat wajib diisi" }, { status: 400 });
        }

        // Simpan data ke database
        const newKuliah = await prisma.alumniKuliah.create({
            data: {
                namaKuliah,
                alamat,
                user: { connect: { id: session.user.id } }, // Hubungkan ke user yang sedang login
            },
        });

        return NextResponse.json({ message: "Data kuliah berhasil disimpan", data: newKuliah }, { status: 201 });

    } catch (error) {
        console.error("Error saat menyimpan data kuliah:", error);
        return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
    }
}
