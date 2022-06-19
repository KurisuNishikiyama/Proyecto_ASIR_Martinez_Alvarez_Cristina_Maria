import React, {Component} from 'react';
import Imagen from './Imagen';
import SetBotones from './setBotones';
import PalabraAdivinadaHastaElMomento from './PalabraAdivinadaHastaElMomento';
import '../../css/micss.css';
import Header from './Header';

// Para mensajes de alerta agradables
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class Ahorcado extends Component {
  constructor(props){
    super(props);
    this.getSetBotonesVacio = this.getSetBotonesVacio.bind(this);
    this.botonPulsado = this.botonPulsado.bind(this);
    this.getpalabraParaAdivinar = this.getpalabraParaAdivinar.bind(this);
    this.getPalabraAdivinadaHastaElMomento = this.getPalabraAdivinadaHastaElMomento.bind(this);

    let palabraParaAdivinar = this.getpalabraParaAdivinar();

    this.state = {
      numFallos: 0,
      numAciertos: 0,
      palabraParaAdivinar: palabraParaAdivinar,
      palabraAdivinadaHastaElMomento: this.getPalabraAdivinadaHastaElMomento(palabraParaAdivinar),
      botones: this.getSetBotonesVacio()
    };
  }

  getPalabraAdivinadaHastaElMomento(palabra){
    let guiones = "";
    for(let i = 0; i < palabra.length; i++){
      guiones += "-";
    }
    return guiones;
  }

 
  getpalabraParaAdivinar(){
    
    // Supongamos que es del tema animales !!!
    // Obtenemos el JSON con las palabras del tema elegido. Ejemplo: Animales

    // Obtenemos las palabras del JSON externo
    let palabras = ["RATON", "TECLADO", "MONITOR", "SOFTWARE", "HARDWARE",
    "INTERNET", "ROUTER", "HACKER", "DISCO", "RAM", "BYTE", "BLOG", "SISTEMA", "CIRCUITO",
    "CODIGO", "PROCESADOR", "DISPOSITIVO", "CUENTA", "ENLACE", "PROGRAMA", "JOYSTICK", "LED", 
    "LASER", "LECTOR", "ESCANER", "MICROFONO", "FIRMWARE", "MODEM", "NODO", "AURICULARES",
    "PENDRIVE", "PANTALLA", "PIXEL", "PLACA", "PUERTO", "RED", "SLOT", "SPAM", "BASE",
    "USUARIO", "WIFI", "VIRUS", "VIRTUAL", "ZOCALO"];
    
    let numAleatorio = Math.floor(Math.random() * palabras.length);
    let palabra = palabras[numAleatorio];
    return palabra;
   // return "Margarita";

  }

  getSetBotonesVacio(){
    let letras = [
      "A", "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N",
      "Ñ", "O", "P", "Q", "R", "S", "T",
      "U", "V", "W", "X", "Y", "Z"
    ];

    let botones = [];
    botones = letras.map((l) => ({ letra: l, estado: "no-pulsado"}));

    return botones;

  }

  botonPulsado(i){
    let letra = this.state.botones[i].letra;
    let botonesAux = this.state.botones;
    

    if(this.hayAcierto(letra)){
      botonesAux[i].estado = "pulsado-acertado";
      this.setState((prevState) => ({
        botones: botonesAux
    }));
    } else {
        botonesAux[i].estado = "pulsado-no-acertado";
        this.setState((prevState) => ({
          numFallos: ++(prevState.numFallos),
          botones: botonesAux
      }));
    }
  }

  componentDidUpdate(){
    if(this.state.numAciertos === this.state.palabraParaAdivinar.length){
      //alert("¡Enhorabuena!");
      MySwal.fire({
        title: <p>Ahorcado</p>,
        footer: 'Proyecto Cristina 2022',
        didOpen: () => {
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(<p>¡Enhorabuena!</p>)
      })
      //this.reiniciar();
    }
    if(this.state.numFallos === 6){
      //alert("¡Lástima!");
      MySwal.fire({
        title: <p>Ahorcado</p>,
        footer: 'Proyecto Cristina 2022',
        didOpen: () => {
          MySwal.clickConfirm()
        }
      }).then(() => {
        console.log(this.state.palabraParaAdivinar);
        return MySwal.fire("¡Lástima! La palabra era " + this.state.palabraParaAdivinar)
      })
      //this.reiniciar();
    }
  }

  /*reiniciar(){
    let palabraParaAdivinar = this.getpalabraParaAdivinar();
    
    this.setState({
      numFallos: 0,
      numAciertos: 0,
      palabraParaAdivinar: palabraParaAdivinar,
      palabraAdivinadaHastaElMomento: this.getPalabraAdivinadaHastaElMomento(palabraParaAdivinar),
      botones: this.getSetBotonesVacio()
    }); 
  }*/

  hayAcierto(letra){
    let acierto = false;
    for(let i = 0; i < this.state.palabraParaAdivinar.length; i++){
      if (this.state.palabraParaAdivinar.charAt(i) === letra){
      this.setState((prevState) => ({
        numAciertos: ++(prevState.numAciertos),
        palabraAdivinadaHastaElMomento:
          prevState.palabraAdivinadaHastaElMomento.substr(0, i) +
          letra +
          prevState.palabraAdivinadaHastaElMomento.substr(i + 1)
      }));
      acierto = true;
    }
  }
  return acierto;
}

  render(){
    return (
      <div>
        <Header/>
        <Imagen numFallos={this.state.numFallos}/>
        <PalabraAdivinadaHastaElMomento 
          PalabraAdivinadaHastaElMomento={this.state.palabraAdivinadaHastaElMomento}/>
        <SetBotones botonPulsado= {(i) => this.botonPulsado(i)} botones={this.state.botones}/>
      </div>
    );
  }
}

export default Ahorcado;