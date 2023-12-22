/*
  Warnings:

  - A unique constraint covering the columns `[btoa]` on the table `admin` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "admin_nama_barang_key";

-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "btoa" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "admin_btoa_key" ON "admin"("btoa");
