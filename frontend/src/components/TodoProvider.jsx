import { createContext, useState } from "react"
//CTodoListProvider context to eliminate the prop drilling problem 
export const TodoListProvider = createContext();

export default function TodoProvider({children}) {
    //It provide todoList adn setTodoList to its children
    const [todoList,setTodoList] = useState([]);
  return (
    <TodoListProvider.Provider value={{todoList,setTodoList}}>
      {children}
    </TodoListProvider.Provider>
  )
}

