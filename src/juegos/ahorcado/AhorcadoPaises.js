import React, {Component} from 'react';
import Imagen from './Imagen';
import SetBotones from './setBotones';
import PalabraAdivinadaHastaElMomento from './PalabraAdivinadaHastaElMomento';
import '../../css/micss.css';
import Header from './Header';
import {useNavigate } from 'react-router';

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
    let palabras = ["ESPAÑA", "PORTUGAL", "FRANCIA", "ITALIA", "GRECIA", "ALEMANIA", "UCRANIA", 
    "POLONIA", "HOLANDA", "SUIZA", "SUECIA", "AUSTRALIA", "VIETNAM", "EGIPTO", "ETIOPIA", "DINAMARCA", 
    "ARGENTINA", "PERU", "BRASIL", "BELGICA", "CHILE", "MEXICO", "CROACIA", "CUBA", "ECUADOR", "ESTONIA",
    "LITUANIA", "FINLANDIA", "HUNGRIA", "INDIA", "INDONESIA", "JAMAICA", "LIBERIA", "LIBANO", "RUSIA", 
    "MARRUECOS", "MOLDAVIA", "TURQUIA", "TAIWAN", "VIETNAM", "SIRIA", "IRAK", "IRAN", "JAPON", "CHINA", 
    "COREA", "FILIPINAS", "JORDANIA", "NEPAL"];
    
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
    //let navigate = useNavigate();
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
      //return navigate("/Categorias");
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
      //return navigate("/Categorias");
    }
  }



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