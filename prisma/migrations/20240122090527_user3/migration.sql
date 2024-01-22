-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "nama_barang" DROP NOT NULL;

-- AlterTable
ALTER TABLE "formPembelian" ALTER COLUMN "status_pesanan" DROP DEFAULT,
ALTER COLUMN "status_pesanan" SET DATA TYPE TEXT;
