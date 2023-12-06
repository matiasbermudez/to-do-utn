import React, { useState, useContext } from 'react'
import '../css/tareas.css'
import { TareasContext } from './tareasProvider.jsx'


export const Tareas = () => {

    const [tareas, setTareas] = useContext(TareasContext)
    const [edit, setEdit] = useState(false)
    const [modificar, setModificar] = useState("")


    //handleCheck compara el id traido del onChange haciendo un map. Cuando hay coincidencia entre elemento.id === id
    //elemento en la key completado pasa a valor lo contrario, si no hay coincidencia devuelve el elemento sin modificiaciones

    const handleCheck = (id) => {
        setTareas((preTarea) => (
            preTarea.map((elemento) => (
                elemento.id === id
                    ? { ...elemento, completado: !elemento.completado }
                    : elemento))
        ))
    }

    const deleteTarea = (id) => {
        const data = tareas.filter(elemento => elemento.id !== id)
        setTareas(data)
        window.localStorage.setItem('tareas-local-storage', JSON.stringify(data))
    }

    const modoEdit = () => {
        setEdit(!edit)
    }

    const editarTarea = (event, id) => {
        const tareaInputId = id
        
        setTareas((preTareas) => {
            const data = (preTareas.map((elemento) => elemento.id === tareaInputId ?
                { ...elemento, nombre: modificar }
                : elemento))
            window.localStorage.setItem('tareas-local-storage', JSON.stringify(data))
            return data
        })
        modoEdit()
        event.preventDefault()
    }


    const unCambio = ({ target }) => {
        setModificar(target.value)
    }

    return (
        <>
            <div className="Tareas-container">
                <ul className='Tareas-ul'>
                    <h2>Lista de tareas</h2>
                    {
                        tareas.map((elemento) => (
                            <div key={elemento.id} className='Tareas-liContainer'>
                                <li className={`Tareas-li ${elemento.completado
                                    ? "completado"
                                    : ''}`}> {elemento.nombre}</li>

                                {/*Contenedor Botones*/}
                                <div className="Tareas-div-contenedor">
                                    {/*Boton Checkbox */}
                                    <div className="Tareas-div-checkYdelete">
                                        <input type="checkbox"
                                            name={`input-Check-${elemento.id}`}
                                            id={elemento.id}
                                            onChange={() => handleCheck(elemento.id)}
                                            checked={elemento.completado}
                                            className="Tareas-checkbox Tarea-ok" />
                                        {/*Boton de borrar*/}

                                        <button className="button" onClick={() => deleteTarea(elemento.id)}>
                                            <span className="button__text">Borrar</span>
                                            <span className="button__icon">
                                                <svg
                                                    className="svg"
                                                    height="512"
                                                    viewBox="0 0 512 512"
                                                    width="512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title></title>
                                                    <path
                                                        d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                                                        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
                                                    ></path>
                                                    <line
                                                        style={{ stroke: '#fff', strokeLinecap: 'round', strokeMiterlimit: '10', strokeWidth: '32px' }}
                                                        x1="80" x2="432" y1="112" y2="112"
                                                    ></line>
                                                    <path
                                                        d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                                                        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
                                                    ></path>
                                                    <line
                                                        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
                                                        x1="256" x2="256" y1="176" y2="400"
                                                    ></line>
                                                    <line
                                                        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
                                                        x1="184" x2="192" y1="176" y2="400"
                                                    ></line>
                                                    <line
                                                        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
                                                        x1="328" x2="320" y1="176" y2="400"
                                                    ></line>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>

                                    <div className='Tareas-div-editar'>
                                        <button onClick={modoEdit}>Editar</button>

                                        <form action="#" onSubmit={(event) => editarTarea(event, elemento.id) } className={`${edit}`}>

                                            <input type="text"
                                                placeholder='edite Tarea'
                                                className={` input-edit-${edit ? "activeEdit" : "disableEdit"}`}
                                                onChange={unCambio}
                                                required
                                            />
                                            <button type="submit"
                                                className={` input-edit-${edit ? "activeEdit" : "disableEdit"}`}> Enviar
                                            </button>


                                        </form>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </ul>
            </div>
        </>
    )
}
