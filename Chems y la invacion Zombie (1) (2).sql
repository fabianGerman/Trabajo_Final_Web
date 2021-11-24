CREATE TABLE `usuario` (
  `idUsuario` int PRIMARY KEY NOT NULL,
  `usuario` varchar(255),
  `password` varchar(255),
  `nombre` varchar(255),
  `email` varchar(255)
);

CREATE TABLE `cuenta` (
  `idCuenta` int PRIMARY KEY NOT NULL,
  `user` varchar(255),
  `puntos` integer,
  `nivel` integer,
  `idUsuario_cuenta` integer,
  `usuario_Nivel` varchar(255)
);

CREATE TABLE `nivel` (
  `idnivel` int PRIMARY KEY NOT NULL,
  `cofre_nivel` integer,
  `idCuenta_nivel` integer,
  `idEnemigo` integer,
  `idEnemigo2` integer,
  `idPlataforma` integer
);

CREATE TABLE `zombie` (
  `idEnemigo` int PRIMARY KEY NOT NULL,
  `seconds` integer,
  `quantity` integer,
  `y` integer
);

CREATE TABLE `zombie2` (
  `idEnemigo2` int PRIMARY KEY NOT NULL,
  `seconds` integer,
  `quantity` integer,
  `y` integer
);

CREATE TABLE `plataforma` (
  `idPlataforma` int PRIMARY KEY NOT NULL,
  `seconds` integer,
  `quantity` integer,
  `y` integer
);

CREATE TABLE `mina` (
  `idMina` int PRIMARY KEY NOT NULL,
  `idNivel_mina` int,
  `seconds` integer,
  `quantity` integer
);

CREATE TABLE `Cofre` (
  `idCofre` int PRIMARY KEY NOT NULL,
  `seconds` integer,
  `y` integer
);

ALTER TABLE `cuenta` ADD FOREIGN KEY (`idUsuario_cuenta`) REFERENCES `usuario` (`idUsuario`);

ALTER TABLE `nivel` ADD FOREIGN KEY (`idCuenta_nivel`) REFERENCES `cuenta` (`idCuenta`);

ALTER TABLE `nivel` ADD FOREIGN KEY (`cofre_nivel`) REFERENCES `Cofre` (`idCofre`);

ALTER TABLE `mina` ADD FOREIGN KEY (`idNivel_mina`) REFERENCES `nivel` (`idnivel`);

ALTER TABLE `nivel` ADD FOREIGN KEY (`idEnemigo`) REFERENCES `zombie` (`idEnemigo`);

ALTER TABLE `nivel` ADD FOREIGN KEY (`idEnemigo2`) REFERENCES `zombie2` (`idEnemigo2`);

ALTER TABLE `nivel` ADD FOREIGN KEY (`idPlataforma`) REFERENCES `plataforma` (`idPlataforma`);
