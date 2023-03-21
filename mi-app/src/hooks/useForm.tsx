import { ChangeEvent, useState } from "react";

//T: Generico

//export function useForm<T>(initState:T){}  //funcion normal
export const useForm = <T extends object>(initState:T,numero:number) => { //funcion flecha

    const [formulario, setFormulario] = useState(initState);

    const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = ev.target;
        
        setFormulario({
            ...formulario,
            [name]:value
        })
    }

  return { ...formulario,formulario,handleChange, numero }
}
