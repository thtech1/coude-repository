Create database dores;
use dores;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` Char(02) primary key auto increment,
  `empresa` varchar(50) NOT NULL UNIQUE,
  `seguimento` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cnpj` CHAR(14) NOT NULL,
  `descricao` varchar(50) NOT NULL
);
