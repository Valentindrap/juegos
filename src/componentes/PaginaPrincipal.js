import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import NavbarPage from "./NavbarPage";
import "../componentes/PaginaPrincipal.css";

const juegos = [
    {
        id: 1,
        nombre: "GTA 6",
        url: "https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html",
        calificacion: 4.5,
        descripcion: `El GTA 6 está aquí, papu.`,
        portada: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/03/gta-6-3282307.jpg?tf=3840x"
    },
    { id: 2, nombre: "Get On Top", url: "https://www.onlinegames.io/games/2024/code/6/get-on-top/index.html", calificacion: 4.0, descripcion: "a ver quien es mas locon", portada: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,fit=cover,f=png/3078616e30ecc5f326bd8e6cad728a03.png" },
    { id: 3, nombre: "Head Soccer 2022", url: "https://www.onlinegames.io/games/2023/construct/280/head-soccer-2022/index.html", calificacion: 5.0, descripcion: "el 1 con la WASD Y LA N Y M. El otro con la flechita y el 1 y 2. a juga", portada: "https://static.playhop.com/images/cc987_2977039_227e0/84f3ca624/2a00000180d6ac39_3fe781f/1329a0cbcf3a908ddae0_4d36e2/orig" },
    { id: 4, nombre: "Draw Here", url: "https://www.onlinegames.io/games/2021/unity2/draw-here/index.html", calificacion: 5.0, descripcion: "NOSE PERO TENES QUE DIBUJAR", portada: "https://www.onlinegames.io/media/posts/567/responsive/Draw-Here-lg.jpg" },
    { id: 5, nombre: "G-SWITCH 3", url: "https://html5-games.io/game/g-switch-3/", calificacion: 5.0, descripcion: "El puto goty", portada: "https://play-lh.googleusercontent.com/ylSOEyk2tG390Pm4-IRUlMVtjNuYnxgX1aTm6ZxC_I6hCHjanvHFgZkCCw73sGE3lg" },
    { id: 6, nombre: "Fuego y Agua", url: "https://pavel-skala.github.io/Fireboy-and-Watergirl/", calificacion: 5.0, descripcion: "Dos jovenes papuchos en escapa de la bestia", portada: "https://play-lh.googleusercontent.com/6N_ON50BZiEAe-ll2lM92NrVrgp5I5Ha6VI0a4Usw7uPmgEjL6tgJR6jWYUkkYgx2LM" },
];

function PaginaPrincipal() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const [filteredJuegos, setFilteredJuegos] = useState(juegos); // Juegos filtrados

    // Función para manejar la búsqueda y filtrar juegos
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchTerm(query);

        // Filtrar los juegos que coincidan con el nombre (ignorando mayúsculas/minúsculas)
        const filtered = juegos.filter((juego) => 
            juego.nombre.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredJuegos(filtered);
    };

    const handleJuegoClick = (juego) => {
        navigate(`/juego/${juego.id}`, { state: { juego } });
    };

    return (
        <div className="pagina-principal">
            <NavbarPage />
            <div className="contenedor-anuncios">
                <div className="anuncio">Anuncio Izquierdo</div>
                <div className="catalogo-juegos">
                    <h1 className="juegos-titulo">Catálogo de Juegos</h1>
                    <div className="search-container">
                        <input 
                            type="text" 
                            name="search" 
                            placeholder="Buscar juegos..." 
                            className="search-input"
                            value={searchTerm} // Vincular el valor al estado de búsqueda
                            onChange={handleSearch} // Filtrar los juegos cuando cambie el texto
                        />
                        <a href="#" className="search-btn">
                        <i className="bi bi-search"></i>      
                        </a>
                    </div>
                    <ul>
                        {filteredJuegos.length > 0 ? (
                            filteredJuegos.map((juego) => (
                                <li key={juego.id} onClick={() => handleJuegoClick(juego)} className="catalogo-juegos-item">
                                    <img src={juego.portada} alt={`Portada de ${juego.nombre}`} />
                                    <h2>{juego.nombre}</h2>
                                    <p>Calificación: {juego.calificacion}</p>
                                </li>
                            ))
                        ) : (
                            <li>No se encontraron juegos.</li>
                        )}
                    </ul>
                </div>
                <div className="anuncio">Anuncio Derecho</div>
            </div>
        </div>
    );
}

export default PaginaPrincipal;
