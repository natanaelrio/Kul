-- CreateTable
CREATE TABLE `cobadulu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `start` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `end` DATETIME(3) NULL,
    `nama_barang` VARCHAR(191) NOT NULL,
    `kategori_barang` VARCHAR(191) NULL,
    `harga_barang` INTEGER NULL,
    `diskon_barang` INTEGER NULL,
    `rating_barang` INTEGER NULL,
    `total_penjualan_barang` INTEGER NULL,
    `diskripsi_barang` VARCHAR(191) NULL,
    `gambar_barang` VARCHAR(191) NULL,
    `slug_barang` VARCHAR(191) NULL,

    UNIQUE INDEX `cobadulu_nama_barang_key`(`nama_barang`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
