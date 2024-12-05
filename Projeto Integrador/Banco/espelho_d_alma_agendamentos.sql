CREATE DATABASE  IF NOT EXISTS `espelho_d_alma` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `espelho_d_alma`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: espelho_d_alma
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendamentos`
--

DROP TABLE IF EXISTS `agendamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamentos` (
  `id_agendamento` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_aluno` int(11) NOT NULL,
  `fk_id_profissional` int(11) NOT NULL,
  `fk_id_unidade` int(11) NOT NULL,
  `horario_agendamento` time NOT NULL,
  `dia_agendamento` date NOT NULL,
  `obs` varchar(255) DEFAULT NULL,
  `status_agendamento` varchar(20) DEFAULT 'AGENDANDO',
  PRIMARY KEY (`id_agendamento`),
  KEY `fk_id_aluno` (`fk_id_aluno`),
  KEY `fk_id_profissional` (`fk_id_profissional`),
  KEY `fk_id_unidade` (`fk_id_unidade`),
  CONSTRAINT `agendamentos_ibfk_1` FOREIGN KEY (`fk_id_aluno`) REFERENCES `alunos` (`id_aluno`),
  CONSTRAINT `agendamentos_ibfk_2` FOREIGN KEY (`fk_id_profissional`) REFERENCES `profissionais` (`id_profissional`),
  CONSTRAINT `agendamentos_ibfk_3` FOREIGN KEY (`fk_id_unidade`) REFERENCES `unidades_senac` (`id_unidade`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamentos`
--

LOCK TABLES `agendamentos` WRITE;
/*!40000 ALTER TABLE `agendamentos` DISABLE KEYS */;
INSERT INTO `agendamentos` VALUES (1,1,4,5,'14:30:00','2024-11-11','Nenhuma observação','confirmado'),(2,2,3,4,'15:30:00','2024-11-11','Nenhuma observação','AGENDANDO'),(3,3,5,3,'16:30:00','2024-11-12','Nenhuma observação','AGENDANDO'),(4,4,2,2,'17:30:00','2024-11-12','Nenhuma observação','AGENDANDO'),(5,5,1,1,'20:30:00','2024-11-13','Nenhuma observação','AGENDANDO'),(6,6,1,1,'15:30:00','2024-11-14','Nenhuma observação','AGENDANDO'),(7,7,2,2,'14:30:00','2024-11-14','Nenhuma observação','AGENDANDO'),(8,8,5,3,'16:30:00','2024-11-14','Nenhuma observação','AGENDANDO'),(9,9,4,4,'20:30:00','2024-11-13','Nenhuma observação','AGENDANDO'),(10,10,3,5,'17:30:00','2024-11-12','Nenhuma observação','AGENDANDO'),(11,1,3,4,'14:30:00','2024-11-25',NULL,'Esperando confirmaçã'),(12,4,2,1,'15:40:00','2024-11-26',NULL,'Confirmação pendente'),(13,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(14,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(15,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(16,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(17,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(18,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(19,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(20,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(21,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(22,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(23,7,5,3,'15:40:00','2024-12-26',NULL,'Confirmação pendente'),(24,8,9,2,'15:50:00','2024-12-01',NULL,'Confirmação pendente'),(25,8,9,2,'15:50:00','2024-12-01',NULL,'Confirmação pendente'),(26,8,9,2,'15:50:00','2024-12-01',NULL,'Confirmação pendente'),(27,1,1,1,'10:00:00','0000-00-00',NULL,NULL),(28,1,1,1,'10:00:00','0000-00-00',NULL,NULL),(29,1,1,1,'10:00:00','2024-12-02',NULL,NULL),(30,1,1,2,'09:00:00','2024-12-03',NULL,NULL),(31,1,1,2,'09:00:00','2024-12-03',NULL,'Confirmação pendente'),(32,1,9,1,'10:00:00','2024-12-04',NULL,'Confirmação pendente'),(33,22,5,1,'14:00:00','2024-12-06',NULL,'Confirmação pendente'),(34,22,16,1,'15:00:00','2024-12-04',NULL,'Cancelado'),(35,22,4,1,'11:00:00','2024-12-03',NULL,'Confirmação pendente'),(36,22,11,1,'15:00:00','2024-12-05',NULL,'Confirmação pendente'),(37,23,4,1,'14:00:00','2024-12-09',NULL,'Confirmação pendente'),(38,18,2,1,'14:00:00','2024-12-03',NULL,'Confirmação pendente'),(39,22,6,1,'11:00:00','2024-12-10',NULL,'Confirmação pendente'),(40,22,6,1,'14:00:00','2024-12-10',NULL,'Confirmação pendente'),(41,24,12,1,'14:00:00','2024-12-10',NULL,'Confirmação pendente'),(42,24,6,1,'14:00:00','2024-12-05',NULL,'Confirmação pendente'),(43,24,6,1,'14:00:00','2024-12-05',NULL,'Confirmação pendente'),(44,24,1,1,'11:00:00','2024-12-10',NULL,'Confirmação pendente'),(45,25,1,1,'10:00:00','2024-12-10',NULL,'Confirmação pendente'),(46,25,5,1,'15:00:00','2024-12-12',NULL,'Confirmação pendente'),(47,25,5,1,'14:00:00','2024-12-12',NULL,'Confirmação pendente'),(48,25,3,1,'11:00:00','2024-12-10',NULL,'Confirmação pendente'),(49,25,3,1,'11:00:00','2024-12-11',NULL,'Confirmação pendente'),(50,25,3,1,'11:00:00','2024-12-11',NULL,'Confirmação pendente'),(51,25,2,1,'09:00:00','2024-12-06',NULL,'Confirmação pendente'),(53,25,3,1,'10:00:00','2024-12-12',NULL,'Confirmação pendente'),(54,25,3,1,'10:00:00','2024-12-12',NULL,'Confirmação pendente');
/*!40000 ALTER TABLE `agendamentos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-05 18:29:44
