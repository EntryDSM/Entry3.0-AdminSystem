-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: localhost    Database: entry
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `admin` (
  `admin_id` varchar(32) NOT NULL,
  `name` varchar(20) NOT NULL,
  `admin_type` enum('ROOT','ADMINISTRATION','QNA','INTERVIEW') NOT NULL DEFAULT 'INTERVIEW',
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `apply_status`
--

DROP TABLE IF EXISTS `apply_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `apply_status` (
  `user_id` varchar(32) NOT NULL,
  `final_submit` tinyint(1) NOT NULL DEFAULT '0',
  `pass_status` tinyint(1) NOT NULL DEFAULT '0',
  `payment` tinyint(1) NOT NULL DEFAULT '0',
  `receipt` tinyint(1) NOT NULL DEFAULT '0',
  `receipt_code` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `exam_code` varchar(6) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `receipt_code_UNIQUE` (`receipt_code`),
  UNIQUE KEY `exam_code_UNIQUE` (`exam_code`),
  CONSTRAINT `FK_apply_status_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `document` (
  `user_id` varchar(32) NOT NULL,
  `introduce` varchar(1600) NOT NULL DEFAULT '',
  `study_plan` varchar(1600) NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `FK_document_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ged_score`
--

DROP TABLE IF EXISTS `ged_score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ged_score` (
  `user_id` varchar(32) NOT NULL,
  `grade` double unsigned NOT NULL DEFAULT '0',
  `conversion_score` double unsigned NOT NULL DEFAULT '0',
  `attendance_score` int(10) unsigned NOT NULL DEFAULT '15',
  `volunteer_score` double unsigned NOT NULL DEFAULT '0',
  `final_score` double unsigned NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `FK_ged_grade_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `graduate_grade`
--

DROP TABLE IF EXISTS `graduate_grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `graduate_grade` (
  `user_id` varchar(32) NOT NULL,
  `semester` int(1) NOT NULL,
  `korean` enum('A','B','C','D','E','F','X') DEFAULT 'X',
  `social` enum('A','B','C','D','E','F','X') DEFAULT 'X',
  `history` enum('A','B','C','D','E','F','X') DEFAULT 'X',
  `math` enum('A','B','C','D','E','F','X') DEFAULT 'X',
  `science` enum('A','B','C','D','E','F','X') DEFAULT 'X',
  `tech` enum('A','B','C','D','E','F','X') DEFAULT 'X',
  `english` enum('A','B','C','D','E','F','X') DEFAULT 'X',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`,`semester`),
  CONSTRAINT `FK_grade_info_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `graduate_info`
--

DROP TABLE IF EXISTS `graduate_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `graduate_info` (
  `user_id` varchar(32) NOT NULL,
  `graduate_year` int(10) unsigned NOT NULL DEFAULT '2019',
  `school_code` varchar(32) DEFAULT NULL,
  `school_tel` varchar(15) NOT NULL DEFAULT '',
  `student_class` int(10) unsigned NOT NULL DEFAULT '0',
  `student_grade` int(10) unsigned NOT NULL DEFAULT '3',
  `student_number` int(10) unsigned NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `FK_graduate_info_school_code` (`school_code`),
  CONSTRAINT `FK_graduate_info_school_code` FOREIGN KEY (`school_code`) REFERENCES `school` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_graduate_info_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `graduate_score`
--

DROP TABLE IF EXISTS `graduate_score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `graduate_score` (
  `user_id` varchar(32) NOT NULL,
  `first_grade` double unsigned NOT NULL DEFAULT '0',
  `second_grade` double unsigned NOT NULL DEFAULT '0',
  `third_grade` double unsigned NOT NULL DEFAULT '0',
  `conversion_score` double unsigned NOT NULL DEFAULT '0',
  `attendance_score` int(10) unsigned NOT NULL DEFAULT '0',
  `volunteer_score` double unsigned NOT NULL DEFAULT '0',
  `final_score` double unsigned NOT NULL DEFAULT '0',
  `volunteer_time` int(10) unsigned NOT NULL DEFAULT '0',
  `period_cut` int(10) unsigned NOT NULL DEFAULT '0',
  `full_cut` int(10) unsigned NOT NULL DEFAULT '0',
  `late` int(10) unsigned NOT NULL DEFAULT '0',
  `early_leave` int(10) unsigned NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `FK_graduate_grade_user_id_idx` (`user_id`),
  CONSTRAINT `FK_graduate_grade_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `info`
--

DROP TABLE IF EXISTS `info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `info` (
  `user_id` varchar(32) NOT NULL,
  `name` varchar(20) NOT NULL DEFAULT '',
  `sex` enum('FEMALE','MALE') DEFAULT NULL,
  `birth` date NOT NULL DEFAULT '2002-01-01',
  `my_tel` varchar(15) NOT NULL DEFAULT '',
  `parent_name` varchar(20) NOT NULL DEFAULT '',
  `parent_tel` varchar(15) NOT NULL DEFAULT '',
  `address_base` varchar(100) NOT NULL DEFAULT '',
  `address_detail` varchar(50) NOT NULL DEFAULT '',
  `zip_code` varchar(5) NOT NULL DEFAULT '',
  `img_path` varchar(50) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `img_path_UNIQUE` (`img_path`),
  CONSTRAINT `FK_info_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `school` (
  `code` varchar(10) NOT NULL,
  `government` varchar(20) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `full_name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `temp_user`
--

DROP TABLE IF EXISTS `temp_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `temp_user` (
  `code` varchar(32) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`code`),
  UNIQUE KEY `UK_user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` varchar(32) NOT NULL,
  `additional_type` enum('NONE','NATIONAL_MERIT','SPECIAL_ADMISSION') NOT NULL DEFAULT 'NONE',
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `graduate_type` enum('WILL','DONE','GED') NOT NULL DEFAULT 'WILL',
  `admission` enum('NORMAL','MEISTER','SOCIAL') NOT NULL DEFAULT 'NORMAL',
  `admission_detail` enum('NONE','BENEFICIARY','ONE_PARENT','CHA_UPPER','CHACHA_UPPER','FROM_NORTH','MULTI_CULTURE','ETC') NOT NULL DEFAULT 'NONE',
  `region` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-01 19:11:42
