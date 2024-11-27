/*
  Warnings:

  - You are about to drop the `Alumni` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TracerStudy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TracerStudy" DROP CONSTRAINT "TracerStudy_alumni_id_fkey";

-- DropTable
DROP TABLE "Alumni";

-- DropTable
DROP TABLE "TracerStudy";

-- DropEnum
DROP TYPE "EmploymentStatus";

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Data" (
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

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumniBekerja" (
    "id" TEXT NOT NULL,
    "tempatKerja" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "statusPekerjaan" BOOLEAN NOT NULL,
    "penghasilan" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AlumniBekerja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumniBerwirausaha" (
    "id" TEXT NOT NULL,
    "usaha" TEXT NOT NULL,
    "penghasilan" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AlumniBerwirausaha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumniKuliah" (
    "id" TEXT NOT NULL,
    "kuliah" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AlumniKuliah_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniBekerja" ADD CONSTRAINT "AlumniBekerja_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniBerwirausaha" ADD CONSTRAINT "AlumniBerwirausaha_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniKuliah" ADD CONSTRAINT "AlumniKuliah_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
