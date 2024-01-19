-- CreateTable
CREATE TABLE "formPembelian" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "nama_lengkap_user" TEXT,
    "alamat_lengkap_user" TEXT,
    "kode_pos_user" INTEGER,
    "no_hp_user" INTEGER,
    "catatan_user" TEXT,
    "dataPesanan" JSONB,

    CONSTRAINT "formPembelian_pkey" PRIMARY KEY ("id")
);
