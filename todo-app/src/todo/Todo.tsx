import { Titlte } from "./components/Titlte"
import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
  return (
    <TodoProvider>
        <Titlte/>
        <TodoList/>
    </TodoProvider>
  )
}
