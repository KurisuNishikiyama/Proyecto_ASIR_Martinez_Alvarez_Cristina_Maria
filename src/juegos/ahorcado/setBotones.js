import React, {Component} from 'react';
import '../../css/micss.css';

class SetBotones extends Component{
  constructor(props){
    super(props);

    this.getSetBotones = this.getSetBotones.bind(this);
  }

  getSetBotones(){
    return this.props.botones.map((boton, index) => (
      <button className={boton.estado}
      key={index} disabled={boton.estado !== "no-pulsado" ? true : false } onClick={() => this.props.botonPulsado(index)}>{boton.letra}</button>
    ));
  }

  render(){
    return (
      <div id="setBotones">
        {this.getSetBotones()}
     </div>
    );
  }
}

export default SetBotones;