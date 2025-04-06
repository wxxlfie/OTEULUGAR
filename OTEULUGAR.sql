-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Abr-2025 às 11:47
-- Versão do servidor: 8.3.0
-- versão do PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `oteulugar`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `agenda`
--

DROP TABLE IF EXISTS `agenda`;
CREATE TABLE IF NOT EXISTS `agenda` (
  `nome` varchar(250) NOT NULL,
  `tipo_consulta` varchar(100) NOT NULL,
  `formato_consulta` varchar(100) NOT NULL,
  `horario` varchar(250) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `data_registo` date NOT NULL,
  `data_atualizacao` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `agenda`
--

INSERT INTO `agenda` (`nome`, `tipo_consulta`, `formato_consulta`, `horario`, `id`, `cliente_id`, `data_registo`, `data_atualizacao`) VALUES
('Ricardo Morais', 'Casal', 'Presencial', 'Dia 20 às 11h', 17, NULL, '2025-01-22', '2025-01-22'),
('Sara Pais', 'Individual', 'Online', 'Dia 30 às 20h', 19, NULL, '2025-01-22', '2025-01-22');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `nome` varchar(250) NOT NULL,
  `tipo_consulta` varchar(100) NOT NULL,
  `formato_consulta` varchar(100) NOT NULL,
  `horario` varchar(50) NOT NULL,
  `notas` varchar(250) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `data_registo` date NOT NULL,
  `data_atualizacao` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`nome`, `tipo_consulta`, `formato_consulta`, `horario`, `notas`, `id`, `data_registo`, `data_atualizacao`) VALUES
('Ricardo Morais', 'Casal', 'Presencial', 'Dia 20 às 11h', 'Pretende fortalecer laços com a esposa', 4, '2025-01-22', '2025-01-22'),
('Sara Pais', 'Individual', 'Online', 'Dia 30 às 20h', 'Problemas no trabalho / Saúde mental a decair', 5, '2025-01-22', '2025-01-22');

-- --------------------------------------------------------

--
-- Estrutura da tabela `marcacao`
--

DROP TABLE IF EXISTS `marcacao`;
CREATE TABLE IF NOT EXISTS `marcacao` (
  `nome_cliente` varchar(250) NOT NULL,
  `tipo_consulta` varchar(100) NOT NULL,
  `presencial_online` varchar(50) NOT NULL,
  `profissional` varchar(250) NOT NULL,
  `horario` varchar(50) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `utilizador_id` int DEFAULT NULL,
  `psicologo_id` int DEFAULT NULL,
  `data_registo` date NOT NULL,
  `data_atualizacao` date NOT NULL,
  `observacoes` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_utilizador` (`utilizador_id`),
  KEY `id_psicologo` (`psicologo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `marcacao`
--

INSERT INTO `marcacao` (`nome_cliente`, `tipo_consulta`, `presencial_online`, `profissional`, `horario`, `id`, `utilizador_id`, `psicologo_id`, `data_registo`, `data_atualizacao`, `observacoes`) VALUES
('Paulo Bandeira', 'Individual', 'Presencial', 'Liliana Marques', 'Dia 20 às 11h', 91, NULL, NULL, '2025-01-22', '2025-01-22', ''),
('Salvador Viegas', 'Casal', 'Online', 'Liliana Marques', 'Dia 10 às 12h', 93, NULL, NULL, '2025-01-22', '2025-01-22', ''),
('Gabriel Pereira', 'Individual', 'Presencial', 'Liliana Marques', 'Dia 27 às 13h', 94, NULL, NULL, '2025-01-22', '2025-01-22', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `psicologo`
--

DROP TABLE IF EXISTS `psicologo`;
CREATE TABLE IF NOT EXISTS `psicologo` (
  `nome` varchar(250) NOT NULL,
  `dta_nascimento` date NOT NULL,
  `e_mail` varchar(155) NOT NULL,
  `contacto` int NOT NULL,
  `nif` int NOT NULL,
  `password` varchar(250) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `utilizador_id` int DEFAULT NULL,
  `data_registo` date NOT NULL,
  `data_atualizacao` date NOT NULL,
  `morada` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `num_celuda` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`utilizador_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `psicologo`
--

INSERT INTO `psicologo` (`nome`, `dta_nascimento`, `e_mail`, `contacto`, `nif`, `password`, `id`, `utilizador_id`, `data_registo`, `data_atualizacao`, `morada`, `num_celuda`) VALUES
('Pedro Paia', '2002-12-16', 'paia@paia.pt', 934164578, 241536748, '$2a$10$VTjblYAr5nRMXrSoQgRUOekYZIoqVO13M0LgCCatjATcUuKMM32se', 31, NULL, '0000-00-00', '0000-00-00', '', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizador`
--

DROP TABLE IF EXISTS `utilizador`;
CREATE TABLE IF NOT EXISTS `utilizador` (
  `nome` varchar(250) NOT NULL,
  `dta_nascimento` date NOT NULL,
  `e_mail` varchar(155) NOT NULL,
  `contacto` int NOT NULL,
  `nif` int NOT NULL,
  `password` varchar(250) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `data_registo` date NOT NULL,
  `data_atualizacao` date NOT NULL,
  `morada` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `psicologo_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `psicolo_id` (`psicologo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `utilizador`
--

INSERT INTO `utilizador` (`nome`, `dta_nascimento`, `e_mail`, `contacto`, `nif`, `password`, `id`, `data_registo`, `data_atualizacao`, `morada`, `psicologo_id`) VALUES
('Soraia Matos', '2004-02-10', 'so@so.pt', 915473876, 509513478, '$2a$10$9BPR42raX1Qd2EolkyvS8..BekBmfwFHSoAOmj2xratMmgGCaFQQi', 79, '0000-00-00', '0000-00-00', '0000-00-00', NULL),
('Francisco Vaz', '2005-02-13', 'vaz@vaz.pt', 945263784, 135236758, '$2a$10$lAbUMALIgeadT47NMGjWAOcc0eNXbXtXCTftPWP3VyJajP0v5Oene', 80, '0000-00-00', '0000-00-00', '0000-00-00', NULL);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `marcacao`
--
ALTER TABLE `marcacao`
  ADD CONSTRAINT `id_psicologo` FOREIGN KEY (`psicologo_id`) REFERENCES `psicologo` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `id_utilizador` FOREIGN KEY (`utilizador_id`) REFERENCES `utilizador` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `psicologo`
--
ALTER TABLE `psicologo`
  ADD CONSTRAINT `id` FOREIGN KEY (`utilizador_id`) REFERENCES `utilizador` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `utilizador`
--
ALTER TABLE `utilizador`
  ADD CONSTRAINT `psicolo_id` FOREIGN KEY (`psicologo_id`) REFERENCES `psicologo` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
