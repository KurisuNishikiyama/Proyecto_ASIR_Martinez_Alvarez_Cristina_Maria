import React, {useState} from 'react';
import '../../css/micss.css';
import ReactCardFlip from "react-card-flip";

const GirarCarta = (props) => {
    //console.log("Carta",props.icono)
//Establecida sin dar la vuelta por defecto.   
    const [isFlipped, setIsFlipped] = useState(false)
//Girar la carta horizonalmente al pulsarse, y si se está comparando o ya fue adivinada dejarla girada.

    const imagen = require("./img/"+props.icono);
    const texto = props.texto;
   
    return(
            <ReactCardFlip isFlipped={props.cartaSeleccionada || props.ParejaCoincide} flipDirection="horizontal">
                <div className="FrontCard" onClick={() => {setIsFlipped(!isFlipped); props.seleccionarCarta()}}>        
                </div>
                <div className="BackCard" onClick={() => setIsFlipped(!isFlipped)}>          
                    <img 
                        src={imagen}  
                        alt={imagen}
                        title={texto} 
                    />
                </div>
            </ReactCardFlip>
        )
} 

export default GirarCarta;