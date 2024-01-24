-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema flight_booking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema flight_booking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `flight_booking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `flight_booking` ;

-- -----------------------------------------------------
-- Table `flight_booking`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flight_booking`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `flight_booking`.`flights`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flight_booking`.`flights` (
  `flight_id` INT NOT NULL AUTO_INCREMENT,
  `airline` VARCHAR(50) NOT NULL,
  `flight_number` VARCHAR(20) NOT NULL,
  `departure_airport` VARCHAR(50) NOT NULL,
  `destination_airport` VARCHAR(50) NOT NULL,
  `departure_datetime` DATETIME NOT NULL,
  `arrival_datetime` DATETIME NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`flight_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `flight_booking`.`bookings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flight_booking`.`bookings` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `flight_id` INT NULL DEFAULT NULL,
  `seat_number` VARCHAR(10) NOT NULL,
  `booking_datetime` DATETIME NOT NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `flight_id` (`flight_id` ASC) VISIBLE,
  CONSTRAINT `bookings_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `flight_booking`.`users` (`user_id`),
  CONSTRAINT `bookings_ibfk_2`
    FOREIGN KEY (`flight_id`)
    REFERENCES `flight_booking`.`flights` (`flight_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
