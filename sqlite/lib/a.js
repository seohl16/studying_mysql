var a = [
	'-- MySQL dump 10.13  Distrib 8.0.26, for macos10.15 (x86_64)\n' +
	  '--\n' +
	  '-- Host: localhost    Database: express_db\n' +
	  '-- ------------------------------------------------------\n' +
	  '-- Server version\t8.0.26\n' +
	  '\n' +
	  '/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */',
	'\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */',
	'\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */',
	'\n/*!50503 SET NAMES utf8mb4 */',
	'\n/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */',
	"\n/*!40103 SET TIME_ZONE='+00:00' */",
	'\n/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */',
	'\n' +
	  '/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */',
	'\n' +
	  "/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */",
	'\n/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */',
	'\n\n--\n-- Table structure for table `users`\n--\n\nDROP TABLE IF EXISTS `users`',
	'\n/*!40101 SET @saved_cs_client     = @@character_set_client */',
	'\n/*!50503 SET character_set_client = utf8mb4 */',
	'\n' +
	  'CREATE TABLE `users` (\n' +
	  '  `id` int NOT NULL AUTO_INCREMENT,\n' +
	  '  `name` varchar(255) NOT NULL,\n' +
	  '  `email` varchar(255) NOT NULL,\n' +
	  '  PRIMARY KEY (`id`),\n' +
	  '  UNIQUE KEY `name` (`name`)\n' +
	  ') ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci',
	'\n/*!40101 SET character_set_client = @saved_cs_client */',
	'\n\n--\n-- Dumping data for table `users`\n--\n\n-- /*LOCK TABLES `users` WRITE',
	'*/\nTABLES `users` WRITE',
	'\n\n/*!40000 ALTER TABLE `users` DISABLE KEYS */',
	'\n' +
	  "INSERT INTO `users` VALUES (4,'aaa','vv'),(23,'aa','aa'),(61,'ㅁㅁㅁㅁ','ㅁㅁㅁㅁ'),(62,'asd','asd'),(137,'JOHN','johnn@email.com')",
	'\n/*!40000 ALTER TABLE `users` ENABLE KEYS */',
	'\n\n/*UNLOCK TABLES',
	' */\n-- UNLOCK TABLES',
	'\n/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */',
	'\n\n/*!40101 SET SQL_MODE=@OLD_SQL_MODE */',
	'\n/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */',
	'\n/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */',
	'\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */',
	'\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */',
	'\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */',
	'\n/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */',
	'\n\n-- Dump completed on 2021-09-27 15:25:25\n'
  ]
  console.log(a.length);