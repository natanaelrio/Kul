-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "detail_deskripsi_barang" JSONB,
ADD COLUMN     "kondisi_diskon_barang" BOOLEAN NOT NULL DEFAULT false;
