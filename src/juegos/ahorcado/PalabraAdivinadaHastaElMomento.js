import React, {Component} from 'react';
import '../../css/micss.css';

class PalabraAdivinadaHastaElMomento extends Component{


  getNombreImagen(){
    return "img/" + this.props.numFallos + ".png";
  }

  render(){
    return (
      <div className='PalabraAdivinadaHastaElMomento'>{this.props.PalabraAdivinadaHastaElMomento}</div>
    );
  }
}

export default PalabraAdivinadaHastaElMomento;