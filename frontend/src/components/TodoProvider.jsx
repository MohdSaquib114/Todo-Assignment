import { createContext, useState } from "react"

export const TodoListProvider = createContext();

export default function TodoProvider({children}) {
    const [todoList,setTodoList] = useState([]);
  return (
    <TodoListProvider.Provider value={{todoList,setTodoList}}>
      {children}
    </TodoListProvider.Provider>
  )
}

