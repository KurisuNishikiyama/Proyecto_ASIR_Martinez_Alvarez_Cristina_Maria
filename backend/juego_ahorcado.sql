-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-06-2022 a las 02:29:40
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juego_ahorcado`
--
CREATE DATABASE IF NOT EXISTS `juego_ahorcado` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `juego_ahorcado`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabra`
--

DROP TABLE IF EXISTS `palabra`;
CREATE TABLE `palabra` (
  `id` int(11) NOT NULL,
  `palabra` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `tema_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `palabra`
--

INSERT INTO `palabra` (`id`, `palabra`, `descripcion`, `tema_id`) VALUES
(1, 'CONEJO', 'Mamífero lagomorfo de la familia Leporidae, mide hasta 50 cm y su masa puede ser hasta 2.5 kilogramos.', 4),
(2, 'RATON', 'El ratón o mouse es un dispositivo apuntador utilizado para facilitar el manejo de un entorno gráfico en una computadora. Generalmente está fabricado en plástico, y se utiliza con una de las manos.', 1),
(3, 'GATO', 'Mamífero felino de tamaño generalmente pequeño, cuerpo flexible, cabeza redonda, patas cortas, cola larga, pelo espeso y suave, largos bigotes y uñas retráctiles.', 4),
(4, 'CISNE', 'Ave palmípeda de unos 150 cm de longitud, plumaje generalmente blanco, cuello largo y curvo, alas grandes y patas cortas.', 4),
(5, 'HURON', 'Mamífero del orden de los carnívoros, de unos 35 cm de longitud (cola incluida), cuerpo alargado muy flexible, patas cortas, cabeza pequeña, hocico afilado, cola larga y pelo suave y espeso de color blanco amarillento.', 4),
(6, 'BUHO', 'Ave rapaz nocturna de hasta 70 cm de altura, con la cabeza grande y ancha, dos mechones sobre los oídos, ojos redondos y grandes en posición frontal, pico ganchudo, garras fuertes y cuerpo rechoncho.', 4),
(7, 'TECLADO', 'Dispositivo de entrada, en parte inspirado en el teclado de las máquinas de escribir, que utiliza un sistema de puntadas o márgenes, para que actúen como palancas mecánicas o interruptores electrónicos que envían toda la información a la computadora o al teléfono móvil.', 1),
(8, 'PERRO', 'Mamífero carnívoro doméstico de la familia de los cánidos que se caracteriza por tener los sentidos del olfato y el oído muy finos, por su inteligencia y por su fidelidad al ser humano.', 4),
(9, 'PICOZAPATO', 'Ave pelecaniforme,3​ la única de la familia Balaenicipitidae.', 4),
(10, 'TREE', 'Árbol.', 3),
(11, 'ESPAÑA', 'Capital: Madrid.', 2),
(12, 'NIGHT', 'Noche.', 3),
(13, 'BUTTERFLY', 'Mariposa.', 3),
(14, 'CLOSET', 'Armario.', 3),
(15, 'FRANCIA', 'Capital: París.', 2),
(16, 'ITALIA', 'Capital: Roma.', 2),
(17, 'CACTUS', 'Planta tropical de tallo carnoso y grueso capaz de almacenar gran cantidad de agua, hojas transformadas en espinas, flores solitarias, de coloración muy vistosa y fruto carnoso y comestible, en algunas especies.', 4),
(18, 'FICUS', 'Árbol tropical de hojas grandes, fuertes y ovaladas y fruto en un receptáculo más o menos carnoso y comestible en muchas especies.', 4),
(19, 'KEY', 'Llave.', 3),
(20, 'LAPTOP', 'Ordenador portátil.', 3),
(21, 'GOLD', 'Oro.', 3),
(22, 'SOUL', 'Alma.', 3),
(23, 'HEART', 'Corazón.', 3),
(24, 'DREAM', 'Sueño.', 3),
(25, 'MOVIE', 'Película.', 3),
(26, 'HAPPINESS', 'Felicidad.', 3),
(27, 'SEE', 'Ver.', 3),
(28, 'SEA', 'Mar.', 3),
(29, 'MURCIELAGO', 'Mamífero volador, generalmente de pequeño tamaño, cuyas alas están formadas por una membrana que va unida desde las extremidades anteriores hasta la cola.', 4),
(30, 'CALABAZA', 'Fruto de la calabacera, comestible, de gran tamaño y forma redonda, de color amarillo o naranja, con muchas semillas en su interior.', 4),
(31, 'ORNITORRINCO', 'Mamífero ovíparo de unos 50 cm de longitud (cola incluida), pelo pardo oscuro muy fino, cuerpo aplastado, hocico carnoso grande y ancho similar al pico del pato, pies palmeados y cola muy ancha y aplanada; es buen nadador y vive solo o en pareja en ríos y lagos de Australia.', 4),
(32, 'BOOK', 'Libro.', 3),
(33, 'EUCALIPTO', 'Árbol de tronco recto, corteza grisácea, copa en forma de cono, hojas en forma de lanza, persistentes, duras y olorosas y flores cubiertas por una especie de tapadera de consistencia leñosa que se transforman en cápsulas; puede alcanzar hasta 60 m de altura.', 4),
(34, 'OLIVO', 'Árbol de tronco corto, grueso y torcido, corteza lisa de color gris, copa ancha y ramosa, hojas perennes y opuestas, de color verde oscuro por el haz y gris plateado por el envés, flores pequeñas, blancas y agrupadas en racimos y fruto (oliva o aceituna) en forma de drupa carnosa y aceitosa de la que se extrae el aceite de oliva; puede alcanzar hasta 10 m de altura.', 4),
(35, 'JACARANDA', 'Árbol tropical de hojas caducas, opuestas, de aspecto ligero y plumoso, flores agrupadas en espigas piramidales y laxas, formadas por más de cincuenta flores de cáliz pequeño y color azul violáceo y fruto en cápsula oblonga; puede alcanzar hasta 10 m de altura.', 4),
(36, 'GERANIO', 'Planta de jardín, de tallos carnosos y ramosos, hojas grandes y fragantes, de borde ondulado, flores de vivos colores, en umbela apretada y fruto en cápsula, unidos de cinco en cinco, cada uno con su semilla.', 4),
(37, 'MUSGO', 'Clase de plantas briofitas formadas por tallos y hojas pequeños y delgados, sin tejido vascular; carecen de verdaderas raíces, pero tienen unas estructuras filamentosas que las sujetan, y crecen formando masas apiñadas de aspecto aterciopelado, formando capa sobre la tierra, las rocas, los troncos de los árboles y en el agua.', 4),
(38, 'PORTUGAL', 'Capital: Lisboa.', 2),
(39, 'JAPON', 'Capital: Tokio.', 2),
(40, 'ARGENTINA', 'Capital: Buenos Aires.', 2),
(41, 'BRASIL', 'Capital: Brasilia.', 2),
(42, 'CHILE', 'Capital: Santiago.', 2),
(43, 'VENEZUELA', 'Capital: Caracas.', 2),
(44, 'EGIPTO', 'Capital: El Cairo.', 2),
(45, 'NIGERIA', 'Capital: Abuya.', 2),
(46, 'MARRUECOS', 'Capital: Rabat.', 2),
(47, 'AUSTRALIA', 'Capital: Canberra.', 2),
(48, 'BELGICA', 'Capital: Bruselas.', 2),
(49, 'NORUEGA', 'Capital: Oslo.', 2),
(50, 'UCRANIA', 'Capital: Kiev.', 2),
(51, 'TURQUIA', 'Capital: Ankara.', 2),
(52, 'ISLANDIA', 'Capital: Reikiavik.', 2),
(53, 'ALEMANIA', 'Capital: Berlín.', 2),
(54, 'NICARAGUA', 'Capital: Managua.', 2),
(55, 'CUBA', 'Capital: La Habana.', 2),
(56, 'VIETNAM', 'Capital: Hanói.', 2),
(57, 'SUDAFRICA', 'Capital: Pretoria.', 2),
(58, 'ARGELIA', 'Capital: Argel.', 2),
(59, 'COLOMBIA', 'Capital: Bogotá.', 2),
(60, 'JORDANIA', 'Capital: Amán.', 2),
(61, 'INDIA', 'Capital: Nueva Delhi.', 2),
(62, 'CHINA', 'Capital: Pekín.', 2),
(63, 'SIRIA', 'Capital: Damasco.', 2),
(64, 'PANAMA', 'Capital: Panamá.', 2),
(65, 'CIENAGA', 'Terreno pantanoso o que está lleno de cieno.', 4),
(66, 'ELEFANTE', 'Mamífero paquidermo de gran tamaño, el mayor de los terrestres, con la piel de color gris oscuro, gruesa, rugosa y sin pelo, grandes orejas colgantes, larga trompa prensil, cuatro extremidades gruesas y casi cilíndricas, cola larga, y dos colmillos muy largos de punta cónica.', 4),
(67, 'LAGO', 'Gran depósito natural de agua en una depresión del terreno, que recoge aguas pluviales, subterráneas o de uno o varios ríos.', 4),
(68, 'CORAL', 'Invertebrado de pequeño tamaño que vive fijo en el fondo del mar formando colonias de millones de individuos unidos entre sí por esqueletos calcáreos de forma generalmente arborescente y colores vistosos.', 4),
(69, 'ALGA', 'Grupo de plantas talofitas, unicelulares o pluricelulares, que viven preferentemente en el agua, tanto dulce como marina, y que en general están provistas de clorofila, acompañada en ocasiones de otros pigmentos de colores variados que enmascaran a esta.', 4),
(70, 'GLACIAR', 'Masa grande de hielo que se forma en la parte alta de una montaña y que desciende lentamente por la ladera en forma de lengua.', 4),
(71, 'CORDILLERA', 'Conjunto de montañas alineadas a lo largo de un eje que forman una unidad.', 4),
(72, 'MARIPOSA', 'Insecto lepidóptero en estado adulto o perfecto; tiene el cuerpo alargado, con cuatro alas grandes y de colores generalmente muy vistosos producidos por unas escamillas o polvillo que las cubre.', 4),
(73, 'PETUNIA', 'Planta herbácea de jardín muy ramosa, de tallos débiles y delgados, hojas ovaladas, flores grandes y olorosas.', 4),
(74, 'ROSA', 'Flor del rosal, de pétalos grandes en forma de corazón, espinas en el tallo, colores vivos y variados (blanco, rosa, rojo, etc.) y olor intenso y agradable.', 4),
(75, 'CLAVEL', 'Planta de tallos delgados y nudosos, hojas largas y estrechas y flores olorosas y terminales.', 4),
(76, 'ABETO', 'Árbol de tronco alto y recto, corteza lisa y blanquecina, copa en forma de cono con ramas horizontales, hojas perennes estrechas y fruto en forma de piña.', 4),
(77, 'CASTAÑO', 'Árbol de tronco grueso, corteza pardusca y lisa, copa ancha y esférica, hojas caducas, en forma de lanza y borde aserrado, flores blancas y fruto (castaña) comestible envuelto en una cápsula llamada erizo.', 4),
(78, 'TABLE', 'Mesa.', 3),
(79, 'CHAIR', 'Silla.', 3),
(80, 'BED', 'Cama.', 3),
(81, 'WINDOW', 'Ventana.', 3),
(82, 'DOOR', 'Puerta.', 3),
(83, 'HOUSE', 'Casa.', 3),
(84, 'BOTTLE', 'Botella.', 3),
(85, 'RUG', 'Alfombra.', 3),
(86, 'STAR', 'Estrella.', 3),
(87, 'MOON', 'Luna.', 3),
(88, 'CLOCK', 'Reloj.', 3),
(89, 'BALL', 'Pelota.', 3),
(90, 'CAKE', 'Tarta.', 3),
(91, 'EYE', 'Ojo.', 3),
(92, 'PORTRAIT', 'Cuadro.', 3),
(93, 'MONITOR', 'Pantalla que muestra la información de tu equipo como imágenes y textos, que son generados gracias a una tarjeta de video que se encuentra en el interior de la torre del ordenador.', 1),
(94, 'PROGRAMA', 'conjunto de pasos lógicos escritos en un lenguaje de programación que nos permite realizar una tarea específica.', 1),
(95, 'RAM', 'Random Access Memory, memoria principal del dispositivo, en la que se almacenan programas y datos.', 1),
(96, 'JOYSTICK', 'Periférico de entrada que consiste en una palanca que gira sobre una base e informa su ángulo o dirección al dispositivo que está controlando.', 1),
(97, 'AURICULARES', 'Periférico de salida del audio del ordenador.', 1),
(98, 'MICROFONO', 'Periférico de entrada del audio del ordenador que sirve para grabar la voz o hablar por internet.', 1),
(99, 'PROCESADOR', 'Unidad central de procesamiento (CPU), es una pieza de hardware que permite que tu ordenador interactúe con todas las aplicaciones y programas instalados.', 1),
(100, 'SOFTWARE', 'Sistema formal de un sistema informático, que comprende el conjunto de los componentes lógicos necesarios que hace posible la realización de tareas específicas.', 1),
(101, 'HARDWARE', 'Partes físicas, tangibles, de un sistema informático, sus componentes eléctricos, electrónicos, electromecánicos.', 1),
(102, 'FIRMWARE', 'Conjunto de instrucciones de un programa informático que se encuentra registrado en una memoria ROM, flash o similar.', 1),
(103, 'USUARIO', 'Persona que utiliza un ordenador o un servicio de red.', 1),
(104, 'HACKER', 'Persona con grandes conocimientos de informática que se dedica a detectar fallos de seguridad en sistemas informáticos.', 1),
(105, 'ROUTER', 'Dispositivo que permite interconectar redes con distinto prefijo en su dirección IP.', 1),
(106, 'BYTE', 'Conjunto de 8 bits que recibe el tratamiento de una unidad y que constituye el mínimo elemento de memoria direccionable de un ordenador.', 1),
(107, 'ZOCALO', 'Lugar en la placa base donde se instala el procesador.', 1),
(108, 'INTERNET', 'Conjunto descentralizado de redes de comunicaciones interconectadas, que utilizan la familia de protocolos TCP/IP, lo cual garantiza que las redes físicas heterogéneas que la componen constituyen una red lógica única de alcance mundial.', 1),
(109, 'DISCO', 'Lámina circular de materia plástica en que están grabados sonidos que se reproducen con un aparato que la hace girar mientras una aguja pasa por los surcos y amplifica la señal.', 1),
(110, 'LASER', 'Dispositivo óptico que genera un haz luminoso de una sola frecuencia, monocromático, coherente y muy intenso, mediante la estimulación eléctrica o térmica de los átomos, moléculas o iones de un material.', 1),
(111, 'ENLACE', 'Referencia unidireccional en un documento electrónico que entrelaza diferentes documentos o secciones entre sí.', 1),
(112, 'PIXEL', 'Unidad básica de una imagen digitalizada en pantalla a base de puntos de color o en escala de grises.', 1),
(113, 'CHIP', 'Circuito electrónico de material semiconductor, especialmente silicio, en forma de cubo minúsculo, que, combinado con otros componentes, forma un sistema integrado más complejo y realiza una función electrónica específica.', 1),
(114, 'CODIGO', 'Sistema de símbolos con que se representa la información que ha de ser tratada por los ordenadores, calculadoras, o cualquier dispositivo electrónico.', 1),
(115, 'MODEM', 'Dispositivo que convierte señales digitales en analógicas, o viceversa, para poder ser transmitidas a través de líneas de teléfono, cables coaxiales, fibras ópticas y microondas; conectado a un ordenador, permite la comunicación con otro ordenador por vía telefónica.', 1),
(116, 'SPAM', 'Correo electrónico no solicitado que se envía a un gran número de destinatarios con fines publicitarios o comerciales.', 1),
(117, 'VIRUS', 'Software que tiene por objetivo alterar el funcionamiento normal de cualquier tipo de dispositivo informático, sin el permiso o el conocimiento del usuario principalmente para lograr fines maliciosos sobre el dispositivo.', 1),
(118, 'BLOG', 'Página web, generalmente de carácter personal, con una estructura cronológica que se actualiza regularmente y que se suele dedicar a tratar un tema concreto.', 1),
(119, 'BIOS', '(Binary Input Output System), software integrado al procesador central responsable de iniciar tu sistema. ', 1),
(120, 'WIFI', 'Tecnología que permite conectar diferentes equipos informáticos a través de una red inalámbrica de banda ancha.', 1),
(121, 'CHASIS', 'Armazón del equipo que contiene los componentes del ordenador, normalmente construidos de acero, plástico o aluminio.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tema`
--

DROP TABLE IF EXISTS `tema`;
CREATE TABLE `tema` (
  `id` int(11) NOT NULL,
  `tema` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tema`
--

INSERT INTO `tema` (`id`, `tema`) VALUES
(1, 'Informática'),
(2, 'Geografía'),
(3, 'Inglés'),
(4, 'Ciencias');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `palabra`
--
ALTER TABLE `palabra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tema_id` (`tema_id`);

--
-- Indices de la tabla `tema`
--
ALTER TABLE `tema`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `palabra`
--
ALTER TABLE `palabra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT de la tabla `tema`
--
ALTER TABLE `tema`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `palabra`
--
ALTER TABLE `palabra`
  ADD CONSTRAINT `fk_tema_id` FOREIGN KEY (`tema_id`) REFERENCES `tema` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
