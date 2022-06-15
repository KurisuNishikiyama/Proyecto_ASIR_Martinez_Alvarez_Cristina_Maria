import ImgIcon from "./juegos/memoryGame/utils/ImgIcon";

const Prueba = () => {
const imagen = require("./juegos/memoryGame/img/"+ImgIcon[0]);
        return (
            <img 
                src={imagen}
                alt="lkjdskjsd"
            />
        );
    
}

export default Prueba;