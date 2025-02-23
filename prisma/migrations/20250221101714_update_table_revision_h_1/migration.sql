/*
  Warnings:

  - You are about to drop the `AlumniBekerja` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AlumniBerwirausaha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AlumniKuliah` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nik` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `major` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `noTelphone` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tahunLulus` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "AlumniBekerja" DROP CONSTRAINT "AlumniBekerja_userId_fkey";

-- DropForeignKey
ALTER TABLE "AlumniBerwirausaha" DROP CONSTRAINT "AlumniBerwirausaha_userId_fkey";

-- DropForeignKey
ALTER TABLE "AlumniKuliah" DROP CONSTRAINT "AlumniKuliah_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bossName" TEXT,
ADD COLUMN     "bossPosition" TEXT,
ADD COLUMN     "howStatus" TEXT,
ADD COLUMN     "nik" INTEGER NOT NULL,
ADD COLUMN     "startStatus" TEXT,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "whereStatus" TEXT,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "major" SET NOT NULL,
ALTER COLUMN "noTelphone" SET NOT NULL,
ALTER COLUMN "tahunLulus" SET NOT NULL;

-- DropTable
DROP TABLE "AlumniBekerja";

-- DropTable
DROP TABLE "AlumniBerwirausaha";

-- DropTable
DROP TABLE "AlumniKuliah";
