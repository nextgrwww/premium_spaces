-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2024 at 01:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `premium_spaces`
--

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `title_image_url` varchar(200) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `area` float DEFAULT NULL,
  `rooms` int(11) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `washrooms` int(11) DEFAULT NULL,
  `kitchens` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `property_type`
--

CREATE TABLE `property_type` (
  `id` int(11) NOT NULL,
  `type_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `passwordHash` varchar(200) DEFAULT NULL,
  `user_type` enum('admin','user') DEFAULT NULL,
  `mob_no` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `county` varchar(20) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `status` enum('enabled','disabled','pending') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `full_name`, `passwordHash`, `user_type`, `mob_no`, `address`, `county`, `zip_code`, `status`) VALUES
('client2@premium-spaces.com', 'Second Demo Client', '1d1fd0d223700e4cc3ea2f19f836d367', 'user', ' 44 7432 456467', '1601 Amphitheatre Parkway', 'West Midlands', 'B145ED', 'enabled'),
('client3@premiumspaces.co.uk', 'Third Demo Client', '1d1fd0d223700e4cc3ea2f19f836d367', 'user', '07340768078', '148 DENVER ROAD', 'West Midlands', 'B145EC', 'enabled'),
('client@premium-spaces.com', 'Demo Client', '1d1fd0d223700e4cc3ea2f19f836d367', 'user', ' 44 7432 456466', '1600 Amphitheatre Parkway', 'West Midlands', 'B145ED', 'enabled'),
('client@stickerworks.com', 'HAMMAD RANA', '1d1fd0d223700e4cc3ea2f19f836d367', 'user', '07340768070', '49 DENVER ROAD', 'West Midlands', 'B145ED', 'enabled');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_type`
--
ALTER TABLE `property_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
