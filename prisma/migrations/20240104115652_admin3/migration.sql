/*
  Warnings:

  - A unique constraint covering the columns `[slug_barang]` on the table `admin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "admin_slug_barang_key" ON "admin"("slug_barang");
