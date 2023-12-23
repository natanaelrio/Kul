/*
  Warnings:

  - The `view_barang` column on the `admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `like_barang` column on the `admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "admin" DROP COLUMN "view_barang",
ADD COLUMN     "view_barang" INTEGER,
DROP COLUMN "like_barang",
ADD COLUMN     "like_barang" INTEGER;
