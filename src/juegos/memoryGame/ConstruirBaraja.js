import shuffle from 'lodash.shuffle';
import ImgIcon from './utils/ImgIcon';

const ConstruirBaraja = (props) => {
    console.log(props);
    //Número de cartas constante, cambiar luego para elegir dificultades.
    const N_CARTAS = Number(props);

    // Hago una copia para "salvaguardar" el array originalk de imágenes
    const ImagenIcon = ImgIcon.map((e) => e);

    let cartas = [];
//Da imágenes a las cartas hasta que el número coincide, al llegar al número de cartas para.
    while (cartas.length < N_CARTAS) {
//Redondea entre las opciones de fontAwesomeClasses y luego las manda de forma aleatoria.
        const index = Math.floor(Math.random() * ImagenIcon.length);
       // const miTexto = ImagenIcon[index].texto;
       // console.log(miTexto);
//Extrae como icono las opciones que index y elige la primera. 
//ParejaCoincide se añade como referencia para después a la hora de ver si las cartas coinciden o no.
        // const carta = {
        //     icono: ImagenIcon.splice(index, 1)[0].src,
        //     texto: ImagenIcon.splice(index, 1)[0].texto,
        //     ParejaCoincide: false
        // };

        const carta = {
            icono: ImagenIcon[index].src,
            texto: ImagenIcon[index].texto,
            ParejaCoincide: false
        };
        
        ImagenIcon.splice(index,1);
//Mete los resultados a las cartas, son dos objetos distintos.
        cartas.push(carta);
        cartas.push({...carta});
    }
//Baraja las cartas para que no estén en la misma posición y añadir dificultad.
console.log("CondstruirBaraja",cartas)    
return shuffle(cartas);
};

export default ConstruirBaraja;