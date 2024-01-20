/*
  Warnings:

  - A unique constraint covering the columns `[nota_user]` on the table `formPembelian` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "formPembelian" ADD COLUMN     "nota_user" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "formPembelian_nota_user_key" ON "formPembelian"("nota_user");
