/*
  Warnings:

  - You are about to drop the `DataUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DataUser" DROP CONSTRAINT "DataUser_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "alamat" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "jurusan" TEXT,
ADD COLUMN     "kelamin" TEXT,
ADD COLUMN     "tamatTahun" INTEGER,
ADD COLUMN     "tanggalLahir" INTEGER,
ADD COLUMN     "tempatLahir" TEXT,
ADD COLUMN     "tlp" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "DataUser";
