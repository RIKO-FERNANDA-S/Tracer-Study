/*
  Warnings:

  - You are about to drop the column `jurusanId` on the `DataUser` table. All the data in the column will be lost.
  - You are about to drop the `Jurusan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DataUser" DROP CONSTRAINT "DataUser_jurusanId_fkey";

-- AlterTable
ALTER TABLE "DataUser" DROP COLUMN "jurusanId";

-- DropTable
DROP TABLE "Jurusan";
