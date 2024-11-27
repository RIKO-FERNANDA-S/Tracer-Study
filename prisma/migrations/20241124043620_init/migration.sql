-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('EMPLOYED', 'UNEMPLOYED', 'ENTREPRENEUR', 'STUDYING');

-- CreateTable
CREATE TABLE "Alumni" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "graduationYear" INTEGER NOT NULL,

    CONSTRAINT "Alumni_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TracerStudy" (
    "id" SERIAL NOT NULL,
    "alumni_id" INTEGER NOT NULL,
    "employment" "EmploymentStatus" NOT NULL,
    "company" TEXT,
    "position" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TracerStudy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumni_email_key" ON "Alumni"("email");

-- AddForeignKey
ALTER TABLE "TracerStudy" ADD CONSTRAINT "TracerStudy_alumni_id_fkey" FOREIGN KEY ("alumni_id") REFERENCES "Alumni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
