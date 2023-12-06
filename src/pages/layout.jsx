import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from './home';
import { Tareas } from './tareas';
import { Formulario } from './formulario';
import '../css/layout.css'
import { TareasProvider } from './tareasProvider';

export const Layout = () => {

    const icono = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>)

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }



    return (
        <>

            <Router>
                <header className='Layout-header'>
                    <button onClick={handleActive} className={`Layout-svg `}>{icono}</button>
                    <nav className={`Layout-nav ${active ? "isActive" : ''}  `}>
                        <ul>
                            <li><Link to="/home">HOME</Link></li>
                            <li><Link to="/tareas">TAREAS</Link></li>
                            <li><Link to="/formulario">FORMULARIO</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route index path='/home' element={<Home />} />

                    <Route
                        path='/tareas'
                        element={
                            <TareasProvider>
                                <Tareas />
                            </TareasProvider>}
                    />
                    <Route
                        path='/formulario'
                        element={
                            <TareasProvider>
                                <Formulario />
                            </TareasProvider>}
                    />

                </Routes>

            </Router>

        </>
    )
}
