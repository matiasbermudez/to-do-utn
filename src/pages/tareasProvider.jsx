import React, { useContext, useState, useEffect, createContext } from 'react'
import arrayTareas from './crearArray.js'

export const TareasContext = createContext(null)


export const TareasProvider = ({ children }) => {

    const [tareas, setTareas] = useState([])

    useEffect(()=>{
        setTareas(arrayTareas)
    },[])

    useEffect(() => {
        const data = window.localStorage.getItem('tareas-local-storage')
        if (data === null || data === undefined) {
            console.log("error")
        }else{setTareas(JSON.parse(data))}
    }, [])




    return (
        <>
            <TareasContext.Provider value={[tareas, setTareas]}>
                {children}
            </TareasContext.Provider>

        </>
    )
}
