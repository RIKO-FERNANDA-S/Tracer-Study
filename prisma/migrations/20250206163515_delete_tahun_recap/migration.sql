/*
  Warnings:

  - You are about to drop the column `tahunId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `TahunRecap` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_tahunId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "tahunId";

-- DropTable
DROP TABLE "TahunRecap";
