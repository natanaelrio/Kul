-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "btoa" TEXT,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "nama_barang" TEXT NOT NULL,
    "kategori_barang" TEXT,
    "tag_barang" TEXT,
    "harga_barang" INTEGER,
    "diskon_barang" INTEGER,
    "rating_barang" INTEGER,
    "total_penjualan_barang" INTEGER,
    "diskripsi_barang" TEXT,
    "gambar_barang" TEXT,
    "slug_barang" TEXT,
    "kupon_barang" TEXT,
    "view_barang" TEXT,
    "like_barang" TEXT,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_btoa_key" ON "admin"("btoa");
