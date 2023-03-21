
import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./TodoReducer"

const INITIAL_STATE :TodoState = {
    todoCount:2,
    todos:[
        {id:'1',desc:'Recolectar nada',completed:false},
        {id:'2',desc:'Pieda de ama',completed:false}
    ],
    completed:0,
    pending:2
}

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children} : Props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id:string) => {
        dispatch({type:'toggleTodo',payload: { id }})
    }
  
  return <TodoContext.Provider value={{
    todoState,
    toggleTodo
  }} >
        {children}
    </TodoContext.Provider>
  
}
