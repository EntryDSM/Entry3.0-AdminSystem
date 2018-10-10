-- MySQL Script generated by MySQL Workbench
-- Thu Sep 20 16:54:18 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema entry
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema entry
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `entry` DEFAULT CHARACTER SET utf8 ;
USE `entry` ;

-- -----------------------------------------------------
-- Table `entry`.`admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`admin` ;

CREATE TABLE IF NOT EXISTS `entry`.`admin` (
  `admin_id` VARCHAR(32) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `admin_type` ENUM('ROOT', 'ADMINISTRATION', 'QNA', 'INTERVIEW') NOT NULL DEFAULT 'INTERVIEW',
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `password` VARCHAR(200) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`admin_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`user` ;

CREATE TABLE IF NOT EXISTS `entry`.`user` (
  `user_id` VARCHAR(32) NOT NULL,
  `additional_type` ENUM('NONE', 'NATIONAL_MERIT', 'SPECIAL_ADMISSION') NOT NULL DEFAULT 'NONE',
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `graduate_type` ENUM('WILL', 'DONE', 'GED') NOT NULL DEFAULT 'WILL',
  `admission` ENUM('NORMAL', 'MEISTER', 'SOCIAL') NOT NULL DEFAULT 'NORMAL',
  `admission_detail` ENUM('NONE', 'BENEFICIARY', 'ONE_PARENT', 'CHA_UPPER', 'CHACHA_UPPER', 'FROM_NORTH', 'MULTI_CULTURE', 'ETC') NOT NULL DEFAULT 'NONE',
  `region` TINYINT(1) NOT NULL DEFAULT '0',
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `UK_user_email` (`email` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`apply_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`apply_status` ;

CREATE TABLE IF NOT EXISTS `entry`.`apply_status` (
  `user_id` VARCHAR(32) NOT NULL,
  `final_submit` TINYINT(1) NOT NULL DEFAULT '0',
  `pass_status` TINYINT(1) NOT NULL DEFAULT '0',
  `payment` TINYINT(1) NOT NULL DEFAULT '0',
  `receipt` TINYINT(1) NOT NULL DEFAULT '0',
  `receipt_code` INT(3) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `exam_code` VARCHAR(6) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `receipt_code_UNIQUE` (`receipt_code` ASC) ,
  UNIQUE INDEX `exam_code_UNIQUE` (`exam_code` ASC) ,
  CONSTRAINT `FK_apply_status_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `entry`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`document`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`document` ;

CREATE TABLE IF NOT EXISTS `entry`.`document` (
  `user_id` VARCHAR(32) NOT NULL,
  `introduce` VARCHAR(1600) NOT NULL DEFAULT '',
  `study_plan` VARCHAR(1600) NOT NULL DEFAULT '',
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `FK_document_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `entry`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`ged_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`ged_score` ;

CREATE TABLE IF NOT EXISTS `entry`.`ged_score` (
  `user_id` VARCHAR(32) NOT NULL,
  `grade` DOUBLE UNSIGNED NOT NULL DEFAULT '0',
  `conversion_score` DOUBLE UNSIGNED NOT NULL DEFAULT '0',
  `attendance_score` INT(10) UNSIGNED NOT NULL DEFAULT '15',
  `volunteer_score` DOUBLE UNSIGNED NOT NULL DEFAULT '0',
  `final_score` DOUBLE GENERATED ALWAYS AS (((`conversion_score` + `attendance_score`) + `volunteer_score`)) VIRTUAL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `FK_ged_grade_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `entry`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`graduate_grade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`graduate_grade` ;

CREATE TABLE IF NOT EXISTS `entry`.`graduate_grade` (
  `user_id` VARCHAR(32) NOT NULL,
  `semester` INT(1) NOT NULL,
  `korean` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'X') NULL DEFAULT 'X',
  `social` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'X') NULL DEFAULT 'X',
  `history` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'X') NULL DEFAULT 'X',
  `math` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'X') NULL DEFAULT 'X',
  `science` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'X') NULL DEFAULT 'X',
  `tech` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'X') NULL DEFAULT 'X',
  `english` ENUM('A', 'B', 'C', 'D', 'E', 'F', 'X') NULL DEFAULT 'X',
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`, `semester`),
  CONSTRAINT `FK_grade_info_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `entry`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`school`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`school` ;

CREATE TABLE IF NOT EXISTS `entry`.`school` (
  `code` VARCHAR(10) NOT NULL,
  `government` VARCHAR(20) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`graduate_info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`graduate_info` ;

CREATE TABLE IF NOT EXISTS `entry`.`graduate_info` (
  `user_id` VARCHAR(32) NOT NULL,
  `graduate_year` INT(10) UNSIGNED NOT NULL DEFAULT '2019',
  `school_code` VARCHAR(32) NULL DEFAULT NULL,
  `school_tel` VARCHAR(15) NOT NULL DEFAULT '',
  `student_class` INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `student_grade` INT(10) UNSIGNED NOT NULL DEFAULT '3',
  `student_number` INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`),
  INDEX `FK_graduate_info_school_code` (`school_code` ASC) ,
  CONSTRAINT `FK_graduate_info_school_code`
    FOREIGN KEY (`school_code`)
    REFERENCES `entry`.`school` (`code`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_graduate_info_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `entry`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`graduate_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`graduate_score` ;

CREATE TABLE IF NOT EXISTS `entry`.`graduate_score` (
  `user_id` VARCHAR(32) NOT NULL,
  `first_grade` DOUBLE UNSIGNED NOT NULL DEFAULT '0',
  `second_grade` DOUBLE UNSIGNED NOT NULL DEFAULT '0',
  `third_grade` DOUBLE UNSIGNED NOT NULL DEFAULT '0',
  `conversion_score` DOUBLE UNSIGNED NOT NULL DEFAULT '0',
  `attendance_score` INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `volunteer_score` DOUBLE UNSIGNED NOT NULL DEFAULT '0',
  `final_score` DOUBLE GENERATED ALWAYS AS (((`conversion_score` + `attendance_score`) + `volunteer_score`)) VIRTUAL,
  `volunteer_time` INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `period_cut` INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `full_cut` INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `late` INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `early_leave` INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`),
  INDEX `FK_graduate_grade_user_id_idx` (`user_id` ASC) ,
  CONSTRAINT `FK_graduate_grade_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `entry`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`info` ;

CREATE TABLE IF NOT EXISTS `entry`.`info` (
  `user_id` VARCHAR(32) NOT NULL,
  `name` VARCHAR(20) NOT NULL DEFAULT '',
  `sex` ENUM('FEMALE', 'MALE') NULL DEFAULT NULL,
  `birth` DATE NOT NULL DEFAULT '2002-01-01',
  `my_tel` VARCHAR(15) NOT NULL DEFAULT '',
  `parent_name` VARCHAR(20) NOT NULL DEFAULT '',
  `parent_tel` VARCHAR(15) NOT NULL DEFAULT '',
  `address_base` VARCHAR(100) NOT NULL DEFAULT '',
  `address_detail` VARCHAR(50) NOT NULL DEFAULT '',
  `zip_code` VARCHAR(5) NOT NULL DEFAULT '',
  `img_path` VARCHAR(50) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `img_path_UNIQUE` (`img_path` ASC) ,
  CONSTRAINT `FK_info_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `entry`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `entry`.`temp_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry`.`temp_user` ;

CREATE TABLE IF NOT EXISTS `entry`.`temp_user` (
  `code` VARCHAR(32) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`code`),
  UNIQUE INDEX `UK_user_email` (`email` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
