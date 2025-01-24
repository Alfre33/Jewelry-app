-- CreateTable
CREATE TABLE "JewelImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "jewelId" TEXT NOT NULL,

    CONSTRAINT "JewelImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JewelImage" ADD CONSTRAINT "JewelImage_jewelId_fkey" FOREIGN KEY ("jewelId") REFERENCES "Jewel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
