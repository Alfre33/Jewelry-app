-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Material" AS ENUM ('gold', 'silver');

-- CreateEnum
CREATE TYPE "JewelType" AS ENUM ('aretes', 'anillos', 'collares', 'pulseras', 'broches', 'dijes', 'rosarios', 'relojes', 'piercings', 'esclavas');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('men', 'women', 'kid', 'unisex');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jewel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" "JewelType" NOT NULL,
    "gender" "Gender" NOT NULL,
    "material" "Material" NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "inStock" INTEGER NOT NULL,

    CONSTRAINT "Jewel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jewel_slug_key" ON "Jewel"("slug");
