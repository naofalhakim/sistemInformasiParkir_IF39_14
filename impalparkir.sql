-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2017 at 04:54 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `impalparkir`
--

-- --------------------------------------------------------

--
-- Table structure for table `kamera`
--

CREATE TABLE `kamera` (
  `id_kamera` int(11) NOT NULL,
  `namaKamera` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `priority` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`email`, `password`, `priority`) VALUES
('admin', 'admin', 'admin'),
('lol', 'lol', 'user'),
('naofalhakim@gmail.com', '123', 'user'),
('popo@gmail.com', '123', 'user'),
('user@gmail.com', '123', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `pengendara`
--

CREATE TABLE `pengendara` (
  `email` varchar(50) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `no_ktp` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengendara`
--

INSERT INTO `pengendara` (`email`, `nama`, `password`, `no_ktp`) VALUES
('lol', 'lol', 'lol', 'lol'),
('naofalhakim@gmail.com', 'naofal', '123', '1301154378'),
('popo@gmail.com', 'pooop', '123', '9090'),
('user@gmail.com', 'user', '123', '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `pesanspot`
--

CREATE TABLE `pesanspot` (
  `id_pesan` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `id_spot` int(5) NOT NULL,
  `tanggal_pesan` date NOT NULL,
  `tanggal_dipakai` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pesanspot`
--

INSERT INTO `pesanspot` (`id_pesan`, `email`, `id_spot`, `tanggal_pesan`, `tanggal_dipakai`) VALUES
(2, 'lol', 7, '2017-12-17', '30-12-2017');

-- --------------------------------------------------------

--
-- Table structure for table `spotparkir`
--

CREATE TABLE `spotparkir` (
  `id_spot` int(5) NOT NULL,
  `nomor` int(5) NOT NULL,
  `sektor` varchar(5) NOT NULL,
  `lantai` int(5) NOT NULL,
  `kategori` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `spotparkir`
--

INSERT INTO `spotparkir` (`id_spot`, `nomor`, `sektor`, `lantai`, `kategori`) VALUES
(1, 1, 'A', 1, 'mobil'),
(2, 2, 'A', 1, 'mobil'),
(3, 3, 'A', 1, 'mobil'),
(4, 1, 'B', 1, 'mobil'),
(5, 2, 'B', 1, 'mobil'),
(6, 3, 'B', 1, 'mobil'),
(7, 1, 'A', 1, 'motor'),
(8, 2, 'A', 1, 'motor'),
(9, 3, 'A', 1, 'motor'),
(10, 1, 'B', 1, 'motor'),
(11, 2, 'B', 1, 'motor'),
(12, 3, 'B', 1, 'motor'),
(13, 1, 'A', 2, 'mobil'),
(14, 2, 'A', 2, 'mobil'),
(15, 3, 'A', 2, 'mobil'),
(16, 1, 'B', 2, 'mobil'),
(17, 2, 'B', 2, 'mobil'),
(18, 3, 'B', 2, 'mobil'),
(19, 1, 'A', 2, 'motor'),
(20, 2, 'A', 2, 'motor'),
(21, 3, 'A', 2, 'motor'),
(22, 1, 'B', 2, 'motor'),
(23, 2, 'B', 2, 'motor'),
(24, 3, 'B', 2, 'motor');

-- --------------------------------------------------------

--
-- Table structure for table `transaksiparkir`
--

CREATE TABLE `transaksiparkir` (
  `id_parkir` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nomor_kendaraan` varchar(10) NOT NULL,
  `id_spot` int(5) NOT NULL,
  `tanggal_parkir` date NOT NULL,
  `waktu_masuk` time NOT NULL,
  `wakt_keluar` time DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksiparkir`
--

INSERT INTO `transaksiparkir` (`id_parkir`, `email`, `nomor_kendaraan`, `id_spot`, `tanggal_parkir`, `waktu_masuk`, `wakt_keluar`, `harga`, `status`) VALUES
(1, 'user@gmail.com', 'AG5004V', 7, '2017-12-17', '21:38:30', NULL, NULL, 0),
(2, 'user@gmail.com', 'AG5469xC', 12, '2017-12-17', '23:07:37', NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `pengendara`
--
ALTER TABLE `pengendara`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `pesanspot`
--
ALTER TABLE `pesanspot`
  ADD PRIMARY KEY (`id_pesan`),
  ADD KEY `dataemail` (`email`),
  ADD KEY `dataspot` (`id_spot`);

--
-- Indexes for table `spotparkir`
--
ALTER TABLE `spotparkir`
  ADD PRIMARY KEY (`id_spot`);

--
-- Indexes for table `transaksiparkir`
--
ALTER TABLE `transaksiparkir`
  ADD PRIMARY KEY (`id_parkir`),
  ADD KEY `transaksiemail` (`email`),
  ADD KEY `transaksispot` (`id_spot`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pesanspot`
--
ALTER TABLE `pesanspot`
  MODIFY `id_pesan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `spotparkir`
--
ALTER TABLE `spotparkir`
  MODIFY `id_spot` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `transaksiparkir`
--
ALTER TABLE `transaksiparkir`
  MODIFY `id_parkir` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `pengendara`
--
ALTER TABLE `pengendara`
  ADD CONSTRAINT `account` FOREIGN KEY (`email`) REFERENCES `login` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pesanspot`
--
ALTER TABLE `pesanspot`
  ADD CONSTRAINT `dataemail` FOREIGN KEY (`email`) REFERENCES `pengendara` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dataspot` FOREIGN KEY (`id_spot`) REFERENCES `spotparkir` (`id_spot`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaksiparkir`
--
ALTER TABLE `transaksiparkir`
  ADD CONSTRAINT `transaksiemail` FOREIGN KEY (`email`) REFERENCES `pengendara` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaksispot` FOREIGN KEY (`id_spot`) REFERENCES `spotparkir` (`id_spot`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
