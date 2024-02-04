-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "btoa" TEXT,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "nama_barang" TEXT,
    "kategori_barang" TEXT,
    "tag_barang" TEXT,
    "harga_barang" INTEGER,
    "diskon_barang" INTEGER,
    "rating_barang" INTEGER,
    "jumlah_barang" INTEGER,
    "total_penjualan_barang" INTEGER,
    "diskripsi_barang" TEXT,
    "gambar_barang" TEXT,
    "slug_barang" TEXT,
    "kupon_barang" TEXT,
    "view_barang" INTEGER,
    "like_barang" INTEGER,
    "link_barang" TEXT,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formPembelian" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "nota_user" TEXT,
    "nama_lengkap_user" TEXT,
    "alamat_lengkap_user" TEXT,
    "kode_pos_user" INTEGER,
    "no_hp_user" INTEGER,
    "catatan_user" TEXT,
    "status_pesanan" TEXT,
    "dataPesanan" JSONB,
    "payment" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "formPembelian_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_btoa_key" ON "admin"("btoa");

-- CreateIndex
CREATE UNIQUE INDEX "admin_slug_barang_key" ON "admin"("slug_barang");

-- CreateIndex
CREATE UNIQUE INDEX "formPembelian_nota_user_key" ON "formPembelian"("nota_user");
