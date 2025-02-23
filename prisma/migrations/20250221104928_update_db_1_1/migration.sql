/*
  Warnings:

  - You are about to drop the column `howStatus` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `income` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "howStatus",
DROP COLUMN "income",
ADD COLUMN     "salary" TEXT;
