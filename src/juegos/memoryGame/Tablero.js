import React, {Component} from 'react';
import Carta from './Carta.js';
import '../../css/micss.css';


class Tablero extends Component{
    render(){        
        //console.log("Tablero",this.props.baraja);
        return(
            <div className="content">
                {this.props.baraja.map((carta, index)=> {
//Elige una carta y mira si está en index para que tenga pareja.
                    const cartaSeleccionada = this.props.ParejaSeleccionada.indexOf(carta) > -1;
                    return   <Carta 
                                icono={carta.icono}  
                                texto={carta.texto}
                                key={index} 
//Llama a seleccionarCarta y le pasa la carta para que la almacene.
                                seleccionarCarta={() => this.props.seleccionarCarta(carta)}
//Le dice a la pareja que coincide.
                                ParejaCoincide={carta.ParejaCoincide}
//Le dice a la carta que la ha seleccionado.
                                cartaSeleccionada={cartaSeleccionada}
                />})}
            </div>    
        );
    };
};

export default Tablero;