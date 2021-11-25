-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.21-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para chems1
CREATE DATABASE IF NOT EXISTS `chems1` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `chems1`;

-- Volcando estructura para tabla chems1.cofre
CREATE TABLE IF NOT EXISTS `cofre` (
  `idCofre` int(11) NOT NULL,
  `seconds` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCofre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla chems1.cofre: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `cofre` DISABLE KEYS */;
/*!40000 ALTER TABLE `cofre` ENABLE KEYS */;

-- Volcando estructura para tabla chems1.cuenta
CREATE TABLE IF NOT EXISTS `cuenta` (
  `idCuenta` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `puntos` int(11) DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  `idUsuario_cuenta` int(11) DEFAULT NULL,
  `usuario_Nivel` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idCuenta`),
  KEY `idUsuario_cuenta` (`idUsuario_cuenta`),
  CONSTRAINT `cuenta_ibfk_1` FOREIGN KEY (`idUsuario_cuenta`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla chems1.cuenta: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `cuenta` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuenta` ENABLE KEYS */;

-- Volcando estructura para tabla chems1.mina
CREATE TABLE IF NOT EXISTS `mina` (
  `idMina` int(11) NOT NULL,
  `idNivel_mina` int(11) DEFAULT NULL,
  `seconds` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMina`),
  KEY `idNivel_mina` (`idNivel_mina`),
  CONSTRAINT `mina_ibfk_1` FOREIGN KEY (`idNivel_mina`) REFERENCES `nivel` (`idnivel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla chems1.mina: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `mina` DISABLE KEYS */;
/*!40000 ALTER TABLE `mina` ENABLE KEYS */;

-- Volcando estructura para tabla chems1.nivel
CREATE TABLE IF NOT EXISTS `nivel` (
  `idnivel` int(11) NOT NULL,
  `cofre_nivel` int(11) DEFAULT NULL,
  `idCuenta_nivel` int(11) DEFAULT NULL,
  `idEnemigo` int(11) DEFAULT NULL,
  `idEnemigo2` int(11) DEFAULT NULL,
  `idPlataforma` int(11) DEFAULT NULL,
  `numeronivel` int(11) DEFAULT NULL,
  PRIMARY KEY (`idnivel`),
  KEY `idCuenta_nivel` (`idCuenta_nivel`),
  KEY `cofre_nivel` (`cofre_nivel`),
  KEY `idEnemigo` (`idEnemigo`),
  KEY `idEnemigo2` (`idEnemigo2`),
  KEY `idPlataforma` (`idPlataforma`),
  CONSTRAINT `nivel_ibfk_1` FOREIGN KEY (`idCuenta_nivel`) REFERENCES `cuenta` (`idCuenta`),
  CONSTRAINT `nivel_ibfk_2` FOREIGN KEY (`cofre_nivel`) REFERENCES `cofre` (`idCofre`),
  CONSTRAINT `nivel_ibfk_3` FOREIGN KEY (`idEnemigo`) REFERENCES `zombie` (`idEnemigo`),
  CONSTRAINT `nivel_ibfk_4` FOREIGN KEY (`idEnemigo2`) REFERENCES `zombie2` (`idEnemigo2`),
  CONSTRAINT `nivel_ibfk_5` FOREIGN KEY (`idPlataforma`) REFERENCES `plataforma` (`idPlataforma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla chems1.nivel: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `nivel` DISABLE KEYS */;
/*!40000 ALTER TABLE `nivel` ENABLE KEYS */;

-- Volcando estructura para tabla chems1.plataforma
CREATE TABLE IF NOT EXISTS `plataforma` (
  `idPlataforma` int(11) NOT NULL,
  `seconds` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPlataforma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla chems1.plataforma: ~97 rows (aproximadamente)
/*!40000 ALTER TABLE `plataforma` DISABLE KEYS */;
INSERT INTO `plataforma` (`idPlataforma`, `seconds`, `quantity`, `y`, `nivel`) VALUES
	(1, 0, 20, 380, 1),
	(2, 0, 22, 410, 1),
	(3, 0, 24, 440, 1),
	(4, 6, 4, 405, 1),
	(5, 7, 4, 420, 1),
	(6, 8, 4, 390, 1),
	(7, 8, 6, 390, 1),
	(8, 9, 3, 465, 1),
	(9, 10, 4, 405, 1),
	(10, 10, 4, 350, 1),
	(11, 12, 4, 420, 1),
	(12, 13, 4, 370, 1),
	(13, 16, 4, 370, 1),
	(14, 17, 4, 320, 1),
	(15, 18, 4, 370, 1),
	(16, 19, 4, 400, 1),
	(17, 19, 4, 300, 1),
	(18, 20, 4, 300, 1),
	(19, 20, 4, 300, 1),
	(20, 21, 4, 300, 1),
	(21, 21, 4, 370, 1),
	(22, 22, 4, 370, 1),
	(23, 26, 95, 465, 1),
	(24, 30, 95, 465, 1),
	(25, 30, 95, 435, 1),
	(26, 34, 95, 465, 1),
	(27, 34, 95, 435, 1),
	(28, 34, 95, 405, 1),
	(29, 38, 95, 315, 1),
	(30, 38, 95, 345, 1),
	(31, 38, 95, 375, 1),
	(32, 38, 95, 405, 1),
	(33, 38, 95, 435, 1),
	(34, 38, 95, 465, 1),
	(35, 42, 95, 465, 1),
	(36, 42, 95, 435, 1),
	(37, 42, 95, 405, 1),
	(38, 42, 95, 120, 1),
	(39, 2, 5, 410, 2),
	(40, 4, 4, 465, 2),
	(41, 6, 5, 390, 2),
	(42, 7, 4, 420, 2),
	(43, 10, 3, 465, 2),
	(44, 12, 15, 390, 2),
	(45, 13, 20, 380, 2),
	(46, 14, 20, 350, 2),
	(47, 31, 5, 465, 2),
	(48, 32, 5, 445, 2),
	(49, 32, 5, 425, 2),
	(50, 33, 5, 405, 2),
	(51, 34, 5, 380, 2),
	(52, 35, 5, 390, 2),
	(53, 35, 4, 380, 2),
	(54, 36, 3, 340, 2),
	(55, 36, 2, 300, 2),
	(56, 38, 4, 465, 2),
	(57, 39, 5, 400, 2),
	(58, 40, 6, 465, 2),
	(59, 40, 4, 400, 2),
	(60, 41, 55, 340, 2),
	(61, 43, 5, 390, 2),
	(62, 44, 5, 390, 2),
	(63, 44, 5, 390, 2),
	(64, 45, 5, 390, 2),
	(65, 46, 5, 390, 2),
	(66, 46, 3, 390, 2),
	(67, 47, 3, 390, 2),
	(68, 0, 100, 380, 3),
	(69, 0, 100, 200, 3),
	(70, 5, 3, 360, 3),
	(71, 5, 3, 330, 3),
	(72, 5, 3, 300, 3),
	(73, 6, 3, 300, 3),
	(74, 5, 5, 390, 3),
	(75, 8, 3, 400, 3),
	(76, 8, 3, 340, 3),
	(77, 13, 4, 400, 3),
	(78, 14, 3, 340, 3),
	(79, 14, 4, 340, 3),
	(80, 15, 3, 340, 3),
	(81, 15, 4, 340, 3),
	(82, 16, 4, 340, 3),
	(83, 16, 4, 340, 3),
	(84, 17, 3, 340, 3),
	(85, 17, 4, 340, 3),
	(86, 18, 4, 300, 3),
	(87, 18, 4, 400, 3),
	(88, 19, 4, 300, 3),
	(89, 19, 4, 270, 3),
	(90, 41, 4, 420, 3),
	(91, 42, 4, 380, 3),
	(92, 43, 4, 380, 3),
	(93, 43, 8, 320, 3),
	(94, 44, 4, 320, 3),
	(95, 44, 3, 360, 3),
	(96, 49, 4, 350, 3),
	(97, 49, 50, 300, 3);
/*!40000 ALTER TABLE `plataforma` ENABLE KEYS */;

-- Volcando estructura para tabla chems1.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(11) NOT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla chems1.usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`idUsuario`, `usuario`, `password`, `nombre`, `email`) VALUES
	(1, 'dario1', '1111', 'dario', 'mach@gmail.com');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

-- Volcando estructura para tabla chems1.zombie
CREATE TABLE IF NOT EXISTS `zombie` (
  `idEnemigo` int(11) NOT NULL,
  `seconds` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  PRIMARY KEY (`idEnemigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla chems1.zombie: ~41 rows (aproximadamente)
/*!40000 ALTER TABLE `zombie` DISABLE KEYS */;
INSERT INTO `zombie` (`idEnemigo`, `seconds`, `quantity`, `y`, `nivel`) VALUES
	(0, NULL, NULL, NULL, 0),
	(1, 3, 3, 465, 1),
	(2, 4, 2, 465, 1),
	(3, 5, 3, 465, 1),
	(4, 6, 2, 375, 1),
	(5, 8, 10, 465, 1),
	(6, 10, 2, 320, 1),
	(7, 12, 10, 465, 1),
	(8, 19, 25, 465, 1),
	(9, 22, 55, 465, 1),
	(10, 26, 55, 435, 1),
	(11, 30, 55, 405, 1),
	(12, 34, 55, 375, 1),
	(13, 38, 55, 285, 1),
	(14, 42, 55, 375, 1),
	(15, 42, 55, 90, 1),
	(16, 2, 1, 465, 2),
	(17, 2, 3, 380, 2),
	(18, 3, 2, 465, 2),
	(19, 4, 2, 435, 2),
	(20, 8, 3, 465, 2),
	(21, 9, 2, 465, 2),
	(22, 10, 1, 465, 2),
	(23, 12, 40, 465, 2),
	(24, 12, 3, 360, 2),
	(25, 13, 3, 350, 2),
	(26, 14, 2, 320, 2),
	(27, 31, 2, 465, 2),
	(28, 32, 2, 465, 2),
	(29, 32, 2, 465, 2),
	(30, 33, 3, 465, 2),
	(31, 34, 3, 465, 2),
	(32, 35, 3, 360, 2),
	(33, 35, 15, 465, 2),
	(34, 40, 100, 465, 2),
	(35, 5, 10, 465, 3),
	(36, 6, 2, 270, 3),
	(37, 6, 3, 465, 3),
	(38, 14, 55, 465, 3),
	(39, 19, 2, 240, 3),
	(40, 42, 2, 350, 3),
	(41, 43, 15, 465, 3),
	(42, 43, 2, 290, 3),
	(43, 44, 2, 465, 3),
	(44, 45, 3, 465, 3);
/*!40000 ALTER TABLE `zombie` ENABLE KEYS */;

-- Volcando estructura para tabla chems1.zombie2
CREATE TABLE IF NOT EXISTS `zombie2` (
  `idEnemigo2` int(11) NOT NULL,
  `seconds` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  PRIMARY KEY (`idEnemigo2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla chems1.zombie2: ~62 rows (aproximadamente)
/*!40000 ALTER TABLE `zombie2` DISABLE KEYS */;
INSERT INTO `zombie2` (`idEnemigo2`, `seconds`, `quantity`, `y`, `nivel`) VALUES
	(1, 4, 3, 240, 1),
	(2, 5, 3, 240, 1),
	(3, 7, 2, 420, 1),
	(4, 9, 2, 420, 1),
	(5, 11, 2, 420, 1),
	(6, 14, 1, 420, 1),
	(7, 14, 4, 180, 1),
	(8, 15, 4, 180, 1),
	(9, 15, 2, 420, 1),
	(10, 17, 3, 370, 1),
	(11, 18, 2, 420, 1),
	(12, 19, 3, 420, 1),
	(13, 5, 2, 420, 2),
	(14, 6, 2, 420, 2),
	(15, 7, 3, 420, 2),
	(16, 7, 2, 420, 2),
	(17, 11, 3, 420, 2),
	(18, 15, 3, 150, 2),
	(19, 15, 1, 420, 2),
	(20, 16, 2, 420, 2),
	(21, 17, 1, 420, 2),
	(22, 19, 3, 100, 2),
	(23, 19, 3, 420, 2),
	(24, 19, 3, 120, 2),
	(25, 19, 2, 420, 2),
	(26, 20, 3, 180, 2),
	(27, 20, 5, 200, 2),
	(28, 21, 2, 420, 2),
	(29, 22, 3, 420, 2),
	(30, 23, 4, 420, 2),
	(31, 24, 4, 420, 2),
	(32, 24, 4, 420, 2),
	(33, 25, 3, 420, 2),
	(34, 26, 2, 420, 2),
	(35, 26, 1, 420, 2),
	(36, 26, 4, 100, 2),
	(37, 26, 3, 120, 2),
	(38, 24, 2, 180, 2),
	(39, 24, 2, 200, 2),
	(40, 27, 3, 420, 2),
	(41, 28, 2, 420, 2),
	(42, 29, 2, 420, 2),
	(43, 37, 1, 400, 2),
	(44, 38, 5, 360, 2),
	(45, 7, 4, 300, 3),
	(46, 8, 4, 420, 3),
	(47, 9, 5, 330, 3),
	(48, 10, 5, 270, 3),
	(49, 10, 1, 420, 3),
	(50, 11, 4, 210, 3),
	(51, 11, 2, 420, 3),
	(52, 12, 5, 270, 3),
	(53, 12, 1, 420, 3),
	(54, 41, 3, 120, 3),
	(55, 42, 3, 200, 3),
	(56, 44, 3, 200, 3),
	(57, 45, 4, 320, 3),
	(58, 46, 2, 420, 3),
	(59, 47, 1, 420, 3),
	(60, 47, 4, 260, 3),
	(61, 48, 2, 420, 3),
	(62, 48, 4, 220, 3);
/*!40000 ALTER TABLE `zombie2` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
