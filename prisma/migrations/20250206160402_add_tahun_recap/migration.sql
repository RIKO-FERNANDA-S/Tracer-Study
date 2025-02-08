/*
  Warnings:

  - You are about to drop the column `alamat` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `jurusan` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `kelamin` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `tamatTahun` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `tanggalLahir` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `tempatLahir` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `tlp` on the `users` table. All the data in the column will be lost.
  - Added the required column `tahunId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "alamat",
DROP COLUMN "jurusan",
DROP COLUMN "kelamin",
DROP COLUMN "tamatTahun",
DROP COLUMN "tanggalLahir",
DROP COLUMN "tempatLahir",
DROP COLUMN "tlp",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "dateOfBirth" INTEGER,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "major" TEXT,
ADD COLUMN     "noTelphone" TEXT,
ADD COLUMN     "placeOfBirth" TEXT,
ADD COLUMN     "tahunId" TEXT NOT NULL,
ADD COLUMN     "tahunLulus" INTEGER;

-- CreateTable
CREATE TABLE "TahunRecap" (
    "id" TEXT NOT NULL,
    "tahun" TEXT,
    "jurusan" TEXT,

    CONSTRAINT "TahunRecap_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_tahunId_fkey" FOREIGN KEY ("tahunId") REFERENCES "TahunRecap"("id") ON DELETE CASCADE ON UPDATE CASCADE;
