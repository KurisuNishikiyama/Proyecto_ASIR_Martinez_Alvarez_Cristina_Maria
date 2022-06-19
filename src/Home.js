import React, {Component} from 'react';

class Home extends Component{
    render(){
        // Página principal
        return (
        <div>
            <div className='header'>Juegos educativos.</div>
            <p>¡Bienvenido a la página de Juegos Educativos!</p>
            <img src={require("./logo/YASUHIKO ARTSTYLE KURI.png")} className='foto'/>
        </div>
        );
    }
}

export default Home;