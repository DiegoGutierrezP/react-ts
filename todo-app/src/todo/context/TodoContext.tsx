import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

//diferencia principal entrelos types y una interfaz es que los types no se puedem extender
export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: (id:string)=> void;
}


export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
