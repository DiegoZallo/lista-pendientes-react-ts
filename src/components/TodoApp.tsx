import { useState } from "react"
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const [listaTarea, setListaTarea] = useState<string[]>([]);

    const handleAddTask = ()=>{
        if(nuevaTarea.trim()==='') return
        setListaTarea(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea('')

    }
    const handleBorrarTarea = (index:number)=>{
        setListaTarea(tareas => tareas.filter((_, i)=> i != index))

    }
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input type="text" 
                    value={nuevaTarea}
                    onChange={(event)=>{setNuevaTarea(event.target.value)}}
                    placeholder="Nueva Tarea"/>
            </div>
            <div>
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTarea} borrarTarea={handleBorrarTarea}/>
        </div>
  )
}