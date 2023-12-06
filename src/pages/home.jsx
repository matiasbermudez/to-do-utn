import React from 'react'
import imagenPrincipal from '../imgs/home-Presentacion.webp'
import '../css/home.css'
import { Parallaxhome } from './parallaxhome'
export const Home = () => {


    return (
        <>

        <Parallaxhome></Parallaxhome>
            <div className='home-box'>
                <article className="home-Container">
                    <div className='home-titulos'>
                        <h1>Trabajo final React </h1>
                        <h2>Lista de tareas que hacer "To Do JR"</h2>
                    </div>
                    <img className="home-imagen" src={imagenPrincipal} alt="Imagen de React de presentacion" />

                    <p className="home-parrafo">¡Hola, soy Matias A. Bermudez, un apasionado aprendiz de programación
                        y creador de esta Single Page Application (SPA) construida con React. "To do Jr" es más que solo una lista de tareas;
                        es una expresión de mi viaje en el desarrollo web.</p>

                </article>
            </div>
        </>
    )
}
