import React, { useState, useRef, useContext } from 'react'
import '../css/formulario.css'
import { Tareas } from './tareas'
import { TareasContext } from './tareasProvider'
export const Formulario = () => {


    const [tareas, setTareas] = useContext(TareasContext)
    const inputRef = useRef(null)
    const [error, setError] = useState('')

    const tomarValorInput = (event) => {

        event.preventDefault()
        //Tomo el valor con el hook useRef y lo guardo en tareaInput
        const tareaInput = inputRef.current.value

        //Coincidencia = Error
        if (tareas.some(elemento => elemento.nombre === tareaInput)) {
            setError('❌❌ La tarea ya existe ❌❌, revisa tus tareas pendientes o ingresa otra 😊😊 ')
            return;
        } else {

            //En caso de no haber una tarea igual, Tomo es estado previo de setTareas, creo un objeto llamado tareaNueva con los valores
            //a ingresar y en nombre ingreso tareaInput(valor ingresado) y retorno el estado completo de preTareas + tareaNueva
            setTareas((preTareas) => {
                const tareaNueva = {
                    id: crypto.randomUUID(),
                    nombre: tareaInput,
                    completado: false
                };

                const data = [...preTareas, tareaNueva];
                window.localStorage.setItem('tareas-local-storage', JSON.stringify(data))
                return data
            })
        }
    }

    return (
        <>
            <div className="formulario-contenedor">
                <h1>Agregar tareas</h1>
                <form action="#" onSubmit={tomarValorInput} className="formulario-form">
                    <div className='formulario-div'>
                        <label htmlFor="nombre">Tarea a agregar</label>
                        <input type="text" autoComplete="off " id="nombre" className="input" ref={inputRef} placeholder='Escriba la tarea a agregar' required />
                    </div>
                    <button type="submit" className="btn" ><span className="text" >Agregar tarea</span></button>
                </form>
                <p>{error}</p>
            </div>

        </>
    )
}
