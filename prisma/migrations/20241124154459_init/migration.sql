/*
  Warnings:

  - Made the column `updatedAt` on table `AlumniBekerja` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `AlumniBerwirausaha` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `AlumniKuliah` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Data` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AlumniBekerja" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "AlumniBerwirausaha" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "AlumniKuliah" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Data" ALTER COLUMN "updatedAt" SET NOT NULL;
