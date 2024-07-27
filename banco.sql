Create database dores;
use dores;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` Char(02) primary key,
  `empresa` varchar(50) NOT NULL,
  `seguimento` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `descricao` varchar(50) NOT NULL
);
