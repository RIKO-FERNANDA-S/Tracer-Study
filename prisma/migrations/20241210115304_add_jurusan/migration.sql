/*
  Warnings:

  - Added the required column `jurusanId` to the `Data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Data" ADD COLUMN     "jurusanId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Jurusan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Jurusan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jurusan_name_key" ON "Jurusan"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Jurusan_slug_key" ON "Jurusan"("slug");

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_jurusanId_fkey" FOREIGN KEY ("jurusanId") REFERENCES "Jurusan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
