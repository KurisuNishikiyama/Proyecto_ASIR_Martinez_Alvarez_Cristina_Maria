import React, { Component } from 'react';
//import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'; 
import Header from './Header';
import Tablero from './Tablero.js';
import ConstruirBaraja from './ConstruirBaraja.js';
//import AppMemoryDificil from "./juegos/memoryGame/AppMemoryDificil";
//import AppMemoryIntermedio from "./juegos/memoryGame/AppMemoryIntermedio";

// Para mensajes de alerta agradables
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../css/micss.css';

const MySwal = withReactContent(Swal)


//Página por defecto al cargar, genera la baraja, expresa el array, añade un booleano para que el usuario no eliga más cartas, no tiene ningún intento.

class AppMemory extends Component {
  constructor(props) {
    super(props);
    console.log(props.id);
    this.state = {
      Baraja: ConstruirBaraja(6),
      ParejaSeleccionada: [],
      CompararCartas: false,
      numeroIntentos: 0,
      tiempo: 500
    }
  };

  Completado() {
    let completado = true;
    this.state.Baraja.forEach(element => {
      if (element.ParejaCoincide === false) {
        completado = false;
      }
    });
   // console.log(completado);
    return completado;
  }

  ModificaBaraja(e){
    console.log(e);
    // *^******************************** Aquí está al fallo
    this.state = { Baraja : ConstruirBaraja(e)};
    // *****************
  }
  /*<select id="menu" onChange={this.ConstruirBaraja}>
  <option value="8">8 cartas</option>
  <option value="10">10 cartas</option>
  <option value="18">18 cartas</option>
</select>*/

  //Controla el estado del número de intentos, la baraja y las llamadas de selección de carta y pareja, asociando resetear para que apunte a estos.
  render() {
    console.log("AppMemory",this.state.Baraja);
    return (
      <div className='App'>
        <Header numeroIntentos={this.state.numeroIntentos} resetear={() => this.resetear()} className="header"/>
        <Tablero baraja={this.state.Baraja} ParejaSeleccionada={this.state.ParejaSeleccionada} seleccionarCarta={(carta) => this.seleccionarCarta(carta)} />
      </div>
    );
  };

  //Si la carta se está comparando, ya se escogió o ya fue adivinada no se puede seleccionar.
  seleccionarCarta(carta) {
    if (this.state.CompararCartas || this.state.ParejaSeleccionada.indexOf(carta) > -1 || carta.ParejaCoincide) {
      return;
    }
    //Se selecciona una carta para buscar su pareja, si se selecciona otra se comparan.
    const ParejaSeleccionada = [...this.state.ParejaSeleccionada, carta];
    this.setState({
      ParejaSeleccionada
    })
    //Solo deja seleccionar dos cartas para comparar.
    if (ParejaSeleccionada.length === 2) {
      this.setState({ CompararCartas: true })

      setTimeout(() => {
        const [PrimeraCarta, SegundaCarta] = ParejaSeleccionada;
        let baraja = this.state.Baraja;
        //Si la pareja seleccionada no es igual se dan la vuelta otra vez, si es igual las deja descubiertas, cada comparación es un intento.
        if (PrimeraCarta.icono === SegundaCarta.icono) {
          baraja = baraja.map((carta) => {
            if (carta.icono !== PrimeraCarta.icono) {
              return carta;
            }
            return { ...carta, ParejaCoincide: true };
          })
        }
        this.setState({ ParejaSeleccionada: [], CompararCartas: false, Baraja: baraja, numeroIntentos: this.state.numeroIntentos + 1 })
        if (this.Completado()) {  
//          alert("¡Enhorabuena!")  
          MySwal.fire({
             title: <p>Memory Game</p>,
             footer: 'Proyecto Cristina 2022',
             didOpen: () => {
               MySwal.clickConfirm()
             }
           }).then(() => {
             return MySwal.fire(<p>¡Enhorabuena!</p>)
           })
        };
      }, this.state.tiempo)
    }
  }
  //Deja las cartas sin dar la vuelta, las mezcla otra vez y el contador de número de intentos vuelve a 0.
  resetear() {
    this.setState({ Baraja: ConstruirBaraja(6), ParejaSeleccionada: [], CompararCartas: false, numeroIntentos: 0 })
  }

};

export default AppMemory;