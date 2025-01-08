/*
  Warnings:

  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_jurusanId_fkey";

-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_userId_fkey";

-- DropTable
DROP TABLE "Data";

-- CreateTable
CREATE TABLE "DataUser" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tempatLahir" TEXT NOT NULL,
    "tanggalLahir" INTEGER NOT NULL,
    "kelamin" BOOLEAN NOT NULL,
    "tamatTahun" INTEGER NOT NULL,
    "jurusan" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "tlp" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "jurusanId" TEXT NOT NULL,

    CONSTRAINT "DataUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DataUser" ADD CONSTRAINT "DataUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataUser" ADD CONSTRAINT "DataUser_jurusanId_fkey" FOREIGN KEY ("jurusanId") REFERENCES "Jurusan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
