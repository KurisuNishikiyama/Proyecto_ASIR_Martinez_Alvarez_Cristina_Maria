import React, {Component} from 'react';

class Imagen extends Component{
  constructor(props){
    super(props);
  }


  render(){
    const imagen = require("./img/"+this.props.numFallos+".png");

    return (
      <img src={imagen} alt="Ahorcado" />
    );
  }
}

export default Imagen;