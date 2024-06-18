import { useContext, useEffect } from "react"
import axios from "axios"
import Todo from "./Todo";
import "../index.css"
import { TodoListProvider } from "./TodoProvider";

export default function TodoList() {
    const {todoList,setTodoList} = useContext(TodoListProvider)
    useEffect(()=>{
      async function getTodoList(){
        const response = await axios.get("http://localhost:3000/api/todos")
        
         setTodoList(response.data.data)
      } 
      getTodoList() 
    },[setTodoList])
  return (
    <div className="todo-list">
        <h2 className="list-heading">Todo List</h2>
        {todoList.map((todo,id)=>
        <Todo key={id+Math.random()} id={todo._id} title={todo.title} startDate={todo.startDate} endDate={todo.endDate} />
        )}
    </div>
  )
}
