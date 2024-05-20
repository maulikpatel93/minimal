-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 20, 2024 at 06:04 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `minimal`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_04_25_052416_create_roles_table', 2),
(5, '2024_04_25_050847_alter_users_table', 3),
(6, '2024_04_25_061047_create_personal_access_tokens_table', 4),
(7, '2024_04_29_111936_add_phone_number_and_country_code_to_users_table', 5),
(17, '2024_05_09_041432_create_modules_table', 6),
(18, '2024_05_09_042115_create_sub_modules_table', 6),
(19, '2024_05_09_042517_create_tabs_table', 6),
(20, '2024_05_09_045102_create_role_permissions_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `route` varchar(100) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `panel` enum('Backend','Frontend','Common') DEFAULT NULL COMMENT 'Backend, Frontend, Common',
  `position` varchar(255) NOT NULL COMMENT 'Menu Position',
  `access` text NOT NULL COMMENT 'create,update,read,delete',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_active_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `title`, `route`, `icon`, `panel`, `position`, `access`, `is_active`, `is_active_at`, `created_at`, `updated_at`) VALUES
(1, 'dashboard', 'dashboard', 'ic_dashboard', 'Backend', '1', 'read,create', 1, NULL, '2024-05-09 05:29:55', '2024-05-15 07:44:40'),
(49, 'Role Management', '', 'ic_user', 'Backend', '2', 'read', 1, '2024-05-13 14:25:22', '2024-05-13 08:55:22', '2024-05-13 08:55:22');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'authToken', '511d4e61952efecb00b6889c69e671db83d75f702b8ebebd28a62fc3302a869d', '[\"*\"]', NULL, NULL, '2024-04-26 00:33:38', '2024-04-26 00:33:38'),
(2, 'App\\Models\\User', 3, 'authToken', '499bffd91ea0c48e8a89c61f977f70f4c44a77d9fe1885f5a6fa30e4a66c6fb2', '[\"*\"]', NULL, NULL, '2024-04-26 01:00:00', '2024-04-26 01:00:00'),
(3, 'App\\Models\\User', 4, 'authToken', 'd82be15bee77687c41e56be74fb6e8a95475063c9111ed3d7ac70ee7ecc6fa54', '[\"*\"]', NULL, NULL, '2024-04-26 01:02:16', '2024-04-26 01:02:16'),
(4, 'App\\Models\\User', 5, 'authToken', '3d427e53631ffafaa84cf6539150ac81fa80c038fe7e043a889b7612a4e0c09e', '[\"*\"]', NULL, NULL, '2024-04-26 01:07:10', '2024-04-26 01:07:10'),
(5, 'App\\Models\\User', 6, 'authToken', 'e64cb64b7f968ae1e81f3049559e763570e92330c87db7d73fa7072d1b84eb7b', '[\"*\"]', NULL, NULL, '2024-04-26 01:14:29', '2024-04-26 01:14:29'),
(6, 'App\\Models\\User', 7, 'authToken', 'e9b68a5ef6a22eb90f1cf3fcb7ad967c4e753491c2ba9de0a9822f21b73175db', '[\"*\"]', NULL, NULL, '2024-04-26 01:46:40', '2024-04-26 01:46:40'),
(7, 'App\\Models\\User', 8, 'authToken', '743c1716bde0edd67a88876dca53667cd2be76f4ed8a92d6fad01e7da9931e60', '[\"*\"]', NULL, NULL, '2024-04-26 01:47:16', '2024-04-26 01:47:16'),
(8, 'App\\Models\\User', 9, 'authToken', 'f3b186840abc22165aebbc4ae05aff7c8be90f4a0accb6ba4fbadec01754dcf4', '[\"*\"]', NULL, NULL, '2024-04-26 01:47:48', '2024-04-26 01:47:48'),
(9, 'App\\Models\\User', 10, 'authToken', 'ef6f33fe4688c998680070376b8a6f80e0c8d7b3ac64fe017341bccdc1fd7ef9', '[\"*\"]', NULL, NULL, '2024-04-26 01:51:03', '2024-04-26 01:51:03'),
(10, 'App\\Models\\User', 11, 'authToken', '430fb7f5af7d0c80c7f8c1177f7a43d24212eaa8ced5bbd687ff8d7574c40d9e', '[\"*\"]', NULL, NULL, '2024-04-26 01:54:25', '2024-04-26 01:54:25'),
(11, 'App\\Models\\User', 10, 'authToken', 'ea26f16ad746f2b0ebe0997d67b6ce53ee3a91b7e37b8af6a005f5fe1dd76ec7', '[\"*\"]', NULL, NULL, '2024-04-26 01:59:06', '2024-04-26 01:59:06'),
(12, 'App\\Models\\User', 10, 'authToken', '9e5c42f7ac1a9682f0448cc9d6a551c4242b63d820dc27d33a370c4d3bf296b4', '[\"*\"]', NULL, NULL, '2024-04-26 02:05:51', '2024-04-26 02:05:51'),
(13, 'App\\Models\\User', 10, 'authToken', '398b4e24b8640c85ae4df53112f51fe7f556fb7eec76d8bd56622ea26dfd7632', '[\"*\"]', NULL, NULL, '2024-04-26 02:06:35', '2024-04-26 02:06:35'),
(14, 'App\\Models\\User', 10, 'authToken', '70a3057b25174d462c67caec3b1be6e3cebc178d9293e5fdbc6da8fc79169137', '[\"*\"]', '2024-04-26 02:14:20', NULL, '2024-04-26 02:07:58', '2024-04-26 02:14:20'),
(15, 'App\\Models\\User', 10, 'authToken', 'e48ecf918850f8dd4a4fec4c26d7afc3e6cd617f557035d61b4d519247918e73', '[\"*\"]', NULL, NULL, '2024-04-26 02:20:10', '2024-04-26 02:20:10'),
(16, 'App\\Models\\User', 10, 'authToken', 'f00cc108cd8a5e91dc8edc031e6b0ca56a81066c30eeda5630a097058465e3cf', '[\"*\"]', NULL, NULL, '2024-04-26 02:21:38', '2024-04-26 02:21:38'),
(17, 'App\\Models\\User', 10, 'authToken', 'de57299ab4ceb38a42949e7ebb2b70740c77a53df9f3de2e3c3e02d0924ad065', '[\"*\"]', NULL, NULL, '2024-04-26 02:23:06', '2024-04-26 02:23:06'),
(18, 'App\\Models\\User', 10, 'authToken', '8aca3fa21e2ddb384269fda0e2e03344e08b558209656379b7a300153ce48ffd', '[\"*\"]', NULL, NULL, '2024-04-26 02:24:17', '2024-04-26 02:24:17'),
(19, 'App\\Models\\User', 10, 'authToken', '1012ab347749861edd76a0c4577e8defc02330563136104d5935271fbd2f70e9', '[\"*\"]', NULL, NULL, '2024-04-26 02:29:36', '2024-04-26 02:29:36'),
(20, 'App\\Models\\User', 10, 'authToken', 'd4d8de0b27073df33bf7e4398ebfcc0fafd5f8ba410d23bd45ddb63e01c795da', '[\"*\"]', NULL, NULL, '2024-04-26 02:29:54', '2024-04-26 02:29:54'),
(21, 'App\\Models\\User', 10, 'authToken', '2661987269718a8905ee1fd26285bd54ebfa67460c97bf146ff6084d42f1b4a7', '[\"*\"]', NULL, NULL, '2024-04-26 03:15:38', '2024-04-26 03:15:38'),
(22, 'App\\Models\\User', 10, 'authToken', '8de6432df06106f460c3e07a29ad5c1d865ff39284044e083710cb887ba4edd3', '[\"*\"]', '2024-04-26 03:22:31', NULL, '2024-04-26 03:16:47', '2024-04-26 03:22:31'),
(23, 'App\\Models\\User', 10, 'authToken', '71f95c2ae3cf4d45b1a69f11b6946b7f3c8a224beda8276371899a17139e2297', '[\"*\"]', NULL, NULL, '2024-04-26 03:23:00', '2024-04-26 03:23:00'),
(24, 'App\\Models\\User', 10, 'authToken', '3fd9a285aa205f558f7881a349290bc677f178ff7bd6ed95eb16c546204dcf27', '[\"*\"]', NULL, NULL, '2024-04-26 03:26:55', '2024-04-26 03:26:55'),
(25, 'App\\Models\\User', 10, 'authToken', '5db822fc36a5590d06beeaedc6baff2c00574c2ff054be6bd9bba83c401a81a6', '[\"*\"]', NULL, NULL, '2024-04-26 04:02:35', '2024-04-26 04:02:35'),
(26, 'App\\Models\\User', 10, 'authToken', '0399e456f338b874dbd4156edcc5355d0305c13c724dd282b5f35a19412a4e21', '[\"*\"]', NULL, NULL, '2024-04-26 04:04:35', '2024-04-26 04:04:35'),
(27, 'App\\Models\\User', 10, 'authToken', '113fe0428634f3ba0f8ec9192640a1c8cbc4dab2cea3c53ac3c26ea6ecaef0ed', '[\"*\"]', NULL, NULL, '2024-04-26 04:05:56', '2024-04-26 04:05:56'),
(28, 'App\\Models\\User', 10, 'authToken', '99f44a71ed66fb3bb9fcef4c39a25ca37d02292aa2e406d6f81b330acf5dc735', '[\"*\"]', NULL, NULL, '2024-04-26 04:30:47', '2024-04-26 04:30:47'),
(29, 'App\\Models\\User', 10, 'authToken', '9c27dd564216e25705e1b3fba288d34c4067ddd974948975551e41838502554f', '[\"*\"]', NULL, '2024-05-03 04:36:13', '2024-04-26 04:36:13', '2024-04-26 04:36:13'),
(30, 'App\\Models\\User', 10, 'authToken', 'fc2b4a491a22be46689ee6fd2e8d1fd90fbc9eae85a05e0b526e462fb5d1b5ea', '[\"*\"]', NULL, '2024-05-03 04:44:55', '2024-04-26 04:44:55', '2024-04-26 04:44:55'),
(31, 'App\\Models\\User', 10, 'authToken', '740ebfc0886d9ca5ce6db2a3e188dc8f022db71e58da1173215ca90d4c42a3a2', '[\"*\"]', NULL, '2024-05-03 04:46:29', '2024-04-26 04:46:29', '2024-04-26 04:46:29'),
(32, 'App\\Models\\User', 10, 'authToken', 'b29feb1b0783434c43a5f281a908af461289b8c809361eb95e9fe8f8e91dd15a', '[\"*\"]', NULL, '2024-05-03 04:47:30', '2024-04-26 04:47:30', '2024-04-26 04:47:30'),
(33, 'App\\Models\\User', 10, 'authToken', '20cef347ea2145b3f4b489d0d2661361557f4a29497419ac5408e704df0f3d82', '[\"*\"]', NULL, '2024-05-03 04:47:56', '2024-04-26 04:47:56', '2024-04-26 04:47:56'),
(34, 'App\\Models\\User', 10, 'authToken', '7624e0aff3e93c2e88ebaac539b9bcd9d468af01e3097da83761023be96afb65', '[\"*\"]', NULL, '2024-05-03 05:07:02', '2024-04-26 05:07:02', '2024-04-26 05:07:02'),
(35, 'App\\Models\\User', 10, 'authToken', 'f50cc763a72d63ec9411447b66fda1ccaaf09e2b1b19ec294578c1e89e123001', '[\"*\"]', '2024-04-26 05:21:07', '2024-05-03 05:08:01', '2024-04-26 05:08:01', '2024-04-26 05:21:07'),
(36, 'App\\Models\\User', 10, 'authToken', 'bfc08d1b03f80417d6e4ad4d9f0ea7fde414cc84ab0bfe515850e58a5d39051e', '[\"*\"]', '2024-04-26 06:43:11', '2024-05-03 05:21:40', '2024-04-26 05:21:40', '2024-04-26 06:43:11'),
(37, 'App\\Models\\User', 10, 'developer tests', 'a63eeceebaa5f606f6c609ff6ee7fd9cf0f5eecbd2309677f75263f4e6a93862', '[\"*\"]', NULL, '2024-05-03 07:00:41', '2024-04-26 07:00:41', '2024-04-26 07:00:41'),
(38, 'App\\Models\\User', 10, 'developer tests', '635045fe7c83149fb65e06999056add8d4cc466df89c0736101c3abe9364f3ed', '[\"*\"]', NULL, '2024-05-03 07:01:02', '2024-04-26 07:01:02', '2024-04-26 07:01:02'),
(39, 'App\\Models\\User', 10, 'developer tests', '88ef07ec0af7c3023fdda9b9d39f94f5d60794f26a819dafbbf5e937bb9d4478', '[\"*\"]', NULL, '2024-05-03 07:02:09', '2024-04-26 07:02:09', '2024-04-26 07:02:09'),
(40, 'App\\Models\\User', 10, 'developer tests', '77ae2e8798821aa0b0d8e46aa8dad8e5b29f9b6459243c95963c21e91638e0f0', '[\"*\"]', NULL, '2024-05-03 07:04:25', '2024-04-26 07:04:25', '2024-04-26 07:04:25'),
(41, 'App\\Models\\User', 10, 'developer tests', 'bfc8595c74c3cfa93ea126f514044b59793e5b46c6bd2aa470bb14ade1c2016d', '[\"*\"]', '2024-04-26 07:05:39', '2024-05-03 07:05:14', '2024-04-26 07:05:14', '2024-04-26 07:05:39'),
(42, 'App\\Models\\User', 10, 'developer tests', '2c1657d60f8abecbb59a3c0ae6edf6e2f89eb876d6052d307c3dfb3f8de06bbb', '[\"*\"]', NULL, '2024-05-03 07:40:25', '2024-04-26 07:40:25', '2024-04-26 07:40:25'),
(43, 'App\\Models\\User', 12, 'developer tests', '41689a4a25cba5837cdac25898f88bfc482a638cf9b789c9b0a37cb3924895d3', '[\"*\"]', '2024-04-29 03:23:31', '2024-05-06 03:15:53', '2024-04-29 03:15:53', '2024-04-29 03:23:31'),
(44, 'App\\Models\\User', 13, 'ketul test', 'd833bc77bc42ebfadf875af811d835f3e93b1ba34dd9c6e5b5723dd21bf24387', '[\"*\"]', NULL, '2024-05-06 03:24:03', '2024-04-29 03:24:03', '2024-04-29 03:24:03'),
(45, 'App\\Models\\User', 14, 'admin test', 'fa8c33a160c2cfa9ced2da090117155ef31559d58f0da4db1c0ee76b48bf7421', '[\"*\"]', '2024-04-29 04:06:26', '2024-05-06 03:33:49', '2024-04-29 03:33:49', '2024-04-29 04:06:26'),
(46, 'App\\Models\\User', 13, 'ketul test', '94b5069ab4f0586ca4e2bf19cfb3e9c51af17eafb41004e18ed6b46f34c146e7', '[\"*\"]', '2024-04-29 04:42:32', '2024-05-06 04:15:19', '2024-04-29 04:15:19', '2024-04-29 04:42:32'),
(47, 'App\\Models\\User', 13, 'ketul test', 'c55a5478de4e611f680efe51d829ee2b1ff4de151d15d6cfb7e6a9450f82fd46', '[\"*\"]', '2024-04-29 04:50:08', '2024-05-06 04:42:46', '2024-04-29 04:42:46', '2024-04-29 04:50:08'),
(48, 'App\\Models\\User', 13, 'ketul test', 'fcbd9f973312bc2d1c6c94d1ebc9dc451befa0a00ed9f6e8423cedee173c0f87', '[\"*\"]', '2024-04-29 05:06:07', '2024-05-06 04:50:36', '2024-04-29 04:50:36', '2024-04-29 05:06:07'),
(49, 'App\\Models\\User', 13, 'ketul test', 'a14b99e419bf5aae763456418fe6f07e269ce301847b8f0828a68cd1e44769af', '[\"*\"]', NULL, '2024-05-06 05:08:06', '2024-04-29 05:08:06', '2024-04-29 05:08:06'),
(50, 'App\\Models\\User', 13, 'ketul test', '7c76591ca0e616383021a78d53067b389fe08e3c7750b260bd88da3429d811d4', '[\"*\"]', '2024-04-29 05:40:31', '2024-05-06 05:13:16', '2024-04-29 05:13:16', '2024-04-29 05:40:31'),
(51, 'App\\Models\\User', 15, 'developer dd', 'e09e54d2c9df1c5fe8a3f1b8f6d6f86fc125cb17dca26800d66ebe0792d5e80c', '[\"*\"]', '2024-05-06 04:42:46', '2024-05-13 04:14:12', '2024-05-06 04:14:12', '2024-05-06 04:42:46'),
(52, 'App\\Models\\User', 15, 'developer dd', 'b64d4752c8571a50fea722248076f708484ef415fa8bfa55e26d96da49a1bd57', '[\"*\"]', '2024-05-06 07:19:44', '2024-05-13 04:43:35', '2024-05-06 04:43:35', '2024-05-06 07:19:44'),
(53, 'App\\Models\\User', 15, 'developer dd', '1985fcdcff202b1b5d2034ad586f2aa7f1a4f5e14d4f43b3807463ab07a71fed', '[\"*\"]', NULL, '2024-05-13 07:24:36', '2024-05-06 07:24:36', '2024-05-06 07:24:36'),
(54, 'App\\Models\\User', 15, 'developer dd', 'c941889dd59441b67e276f59e79788528abaf1f6a2c9e87e36164ed3428298e0', '[\"*\"]', '2024-05-08 03:57:48', '2024-05-15 01:21:46', '2024-05-08 01:21:46', '2024-05-08 03:57:48'),
(55, 'App\\Models\\User', 15, 'Developer Test', '072810b57e3261ee718aeebd0f8d865ac3fb1db53a3831591444670e1101f0db', '[\"*\"]', NULL, '2024-05-15 03:58:23', '2024-05-08 03:58:23', '2024-05-08 03:58:23'),
(56, 'App\\Models\\User', 15, 'Developer Test', 'f84796f093669b1f572b06656c69fab961eb50c276b6700b0398077dbcc9250a', '[\"*\"]', '2024-05-10 05:07:12', '2024-05-15 03:58:45', '2024-05-08 03:58:45', '2024-05-10 05:07:12'),
(57, 'App\\Models\\User', 21, 'programmer developer', 'ad1469a934f16b47335459effb29775d1719addc839982856a02471f4d6b76d0', '[\"*\"]', '2024-05-10 22:58:50', '2024-05-17 05:13:17', '2024-05-10 05:13:17', '2024-05-10 22:58:50'),
(58, 'App\\Models\\User', 21, 'programmer developer', '2d477a94ac7f2a96f8d4f2dabcfde849ef418b4802679063e72c21186c43db48', '[\"*\"]', '2024-05-16 00:58:28', '2024-05-17 22:59:17', '2024-05-10 22:59:17', '2024-05-16 00:58:28'),
(59, 'App\\Models\\User', 21, 'programmer developer', '858d7277646dbe385b6b82d5674e29bd599ff581a3221e3bd38d4add7b5fd841', '[\"*\"]', '2024-05-17 07:39:31', '2024-05-23 01:26:44', '2024-05-16 01:26:44', '2024-05-17 07:39:31');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Masteradmin', 1, '2024-04-25 03:20:15', '2024-04-25 03:20:15'),
(2, 'admin', 1, '2024-04-25 03:20:15', '2024-04-25 03:20:15'),
(3, 'subadmin', 1, '2024-04-25 03:20:15', '2024-04-25 03:20:15');

-- --------------------------------------------------------

--
-- Table structure for table `role_permissions`
--

CREATE TABLE `role_permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `module_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Type Of Module',
  `sub_module_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Type Of sub Module',
  `tab_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Type Of tab',
  `role_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Type Of Role',
  `module_type` varchar(255) NOT NULL COMMENT 'module, sub_module, tab',
  `permissions` varchar(255) NOT NULL COMMENT 'create, update, delete, read',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_permissions`
--

INSERT INTO `role_permissions` (`id`, `module_id`, `sub_module_id`, `tab_id`, `role_id`, `module_type`, `permissions`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL, 1, 'module', 'read', '2024-05-10 09:51:26', '2024-05-10 09:51:26'),
(8, 49, NULL, NULL, 1, 'module', 'read', '2024-05-10 09:51:26', '2024-05-10 09:51:26'),
(9, 49, 6, NULL, 1, 'sub_module', 'create,update,delete,read', '2024-05-10 09:51:26', '2024-05-10 09:51:26'),
(10, 49, 7, NULL, 1, 'sub_module', 'create,update,delete,read', '2024-05-16 04:40:32', '2024-05-16 04:40:32'),
(11, 49, 8, NULL, 1, 'sub_module', 'create,read,update,delete', '2024-05-16 06:20:41', '2024-05-16 06:20:41'),
(12, 49, 9, NULL, 1, 'sub_module', 'create,read,update,delete', '2024-05-17 06:39:19', '2024-05-17 06:39:19');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('IvSUa3wvHIQ3Nn4jI5AuGoXUp5bEbolvvxl94J0E', NULL, '127.0.0.1', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:125.0) Gecko/20100101 Firefox/125.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU3FCWU1DMGtlWENFRk5sbjY4cVVrTkNXNnowSHhjZ1BKVzk2NU5uViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvc2FuY3R1bS9jc3JmLWNvb2tpZSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1715950376),
('Qrjek4dwmXs9EDsPtx4MwuXGHzkGF59zFNhcfvRx', NULL, NULL, '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieWVDcW9nU3lobjZ5cHVneVF2eXZjdHplSHh6anJpa2R3MUx4T1VvaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6ODoiaHR0cDovLzoiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1715949404);

-- --------------------------------------------------------

--
-- Table structure for table `sub_modules`
--

CREATE TABLE `sub_modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `module_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Type Of Module',
  `panel` enum('Backend','Frontend','Common') DEFAULT NULL COMMENT 'Backend, Frontend, Common',
  `route` varchar(100) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `position` varchar(255) NOT NULL COMMENT 'Menu Position',
  `access` text NOT NULL COMMENT 'create,update,read,delete',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_active_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_modules`
--

INSERT INTO `sub_modules` (`id`, `title`, `module_id`, `panel`, `route`, `icon`, `position`, `access`, `is_active`, `is_active_at`, `created_at`, `updated_at`) VALUES
(6, 'Modules', 49, 'Backend', 'modules/list', NULL, '1', 'create,update,delete,read', 1, '2024-05-13 14:29:02', '2024-05-13 08:59:02', '2024-05-13 08:59:02'),
(7, 'SubModules', 49, 'Backend', 'submodule/list', NULL, '2', 'create,update,delete,read', 1, '2024-05-16 10:00:48', '2024-05-16 04:30:48', '2024-05-16 04:30:48'),
(8, 'Role Permissions', 49, 'Backend', 'role-permission/list', NULL, '4', 'create,read,update,delete', 1, '2024-05-16 06:19:54', '2024-05-16 00:49:54', '2024-05-16 00:49:54'),
(9, 'Tab', 49, 'Backend', 'tab/list', NULL, '3', 'create,read,update,delete', 1, '2024-05-17 12:07:10', '2024-05-17 06:37:10', '2024-05-17 06:37:10');

-- --------------------------------------------------------

--
-- Table structure for table `tabs`
--

CREATE TABLE `tabs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `module_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Type Of Module',
  `sub_module_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Type Of Module',
  `panel` enum('Backend','Frontend','Common') DEFAULT NULL COMMENT 'Backend, Frontend, Common',
  `route` varchar(100) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `position` varchar(255) NOT NULL COMMENT 'Menu Position',
  `access` text NOT NULL COMMENT 'create,update,read,delete',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_active_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tabs`
--

INSERT INTO `tabs` (`id`, `title`, `module_id`, `sub_module_id`, `panel`, `route`, `icon`, `position`, `access`, `is_active`, `is_active_at`, `created_at`, `updated_at`) VALUES
(2, 'Test', 49, 9, 'Backend', 'tab/tab/list/test', NULL, '1', 'create,read,update,delete', 1, '2024-05-17 12:11:44', '2024-05-17 06:41:44', '2024-05-17 06:41:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `country_code` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `email_otp` varchar(255) DEFAULT NULL,
  `phone_otp` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `timezone` varchar(100) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `is_active_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `profile_image`, `role_id`, `email`, `phone_number`, `country_code`, `email_verified_at`, `email_otp`, `phone_otp`, `password`, `remember_token`, `timezone`, `is_active`, `is_active_at`, `created_at`, `updated_at`) VALUES
(21, 'programmer', 'developer', '1715414172_sms-run-out-alerts.png', 1, 'programmer106.dynamicdreamz@gmail.com', '1234567890', '91', NULL, NULL, NULL, '$2y$12$RRhEZvGaY8WtxvlUNDbWo.H32Ght70vN924pWacoZJZKfzv1i8oSG', NULL, 'Asia/Kolkata', 1, NULL, '2024-05-10 05:13:07', '2024-05-11 02:26:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_permissions`
--
ALTER TABLE `role_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_permissions_module_id_foreign` (`module_id`),
  ADD KEY `role_permissions_sub_module_id_foreign` (`sub_module_id`),
  ADD KEY `role_permissions_tab_id_foreign` (`tab_id`),
  ADD KEY `role_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `sub_modules`
--
ALTER TABLE `sub_modules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_modules_module_id_foreign` (`module_id`);

--
-- Indexes for table `tabs`
--
ALTER TABLE `tabs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tabs_module_id_foreign` (`module_id`),
  ADD KEY `tabs_sub_module_id_foreign` (`sub_module_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `role_permissions`
--
ALTER TABLE `role_permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sub_modules`
--
ALTER TABLE `sub_modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tabs`
--
ALTER TABLE `tabs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `role_permissions`
--
ALTER TABLE `role_permissions`
  ADD CONSTRAINT `role_permissions_module_id_foreign` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_permissions_sub_module_id_foreign` FOREIGN KEY (`sub_module_id`) REFERENCES `sub_modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_permissions_tab_id_foreign` FOREIGN KEY (`tab_id`) REFERENCES `tabs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sub_modules`
--
ALTER TABLE `sub_modules`
  ADD CONSTRAINT `sub_modules_module_id_foreign` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tabs`
--
ALTER TABLE `tabs`
  ADD CONSTRAINT `tabs_module_id_foreign` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tabs_sub_module_id_foreign` FOREIGN KEY (`sub_module_id`) REFERENCES `sub_modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
