import React from "react";
import { useNavigate } from "react-router-dom";
import '../../css/micss.css';

const Categorias = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">Juego del Ahorcado</div>
      <div className="sidebar">
        <ul>
        <li><button onClick={() => navigate("/AhorcadoInformatica")}>Informática</button></li>
        <li><button onClick={() => navigate("/AhorcadoAnimales")}>Animales</button></li>
        <li><button onClick={() => navigate("/AhorcadoFlores")}>Flores</button></li>
        <li><button onClick={() => navigate("/AhorcadoPaises")}>Países</button></li>
        </ul>
        </div>
      <div className="content">Elige una categoría:</div>
    </>
  );
};

export default Categorias;