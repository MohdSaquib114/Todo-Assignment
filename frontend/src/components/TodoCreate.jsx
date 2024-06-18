import { useContext, useState } from "react"
import "../index.css"
import axios from "axios"
import { TodoListProvider } from "./TodoProvider"

export default function TodoCreate() {
  const {setTodoList} = useContext(TodoListProvider)
  const [todoInputs,setTodoInputs] = useState({
    title:"",
    startDate:"",
    endDate:""
  })

 async function handleSubmit(e){
    e.preventDefault()
    if(todoInputs.title === "" || todoInputs.startDate === "" || todoInputs.endDate === "" ) return
   try{
    await axios.post("http://localhost:3000/api/todo",todoInputs)
   
     alert("Todo created")
     setTodoInputs({
      title:"",
      startDate:"",
      endDate:""
    })
    const response = await axios.get("http://localhost:3000/api/todos")
    setTodoList(response.data.data)

   }catch(e){
    
    alert(e.message)
   }
  }

  function  handleTitleChange(e){
     setTodoInputs({
      ...todoInputs,
      title:e.target.value
     })
  }
  function  handleSrtDateChange(e){
     setTodoInputs({
      ...todoInputs,
      startDate:e.target.value
     })
  }
  function  handleEndDateChange(e){
     setTodoInputs({
      ...todoInputs,
      endDate:e.target.value
     })
  }
  
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="title">Title</label>
      <input onChange={handleTitleChange} name="title"  className="input" placeholder="Enter Todo Title" value={todoInputs.title} />
      <label htmlFor="start-date">Start Date</label>
      <input onChange={handleSrtDateChange} name="start-date" className="input" type="date" value={todoInputs.startDate} />
      <label htmlFor="end-date">End Date</label>
      <input onChange={handleEndDateChange} name="end-date" className="input" type="date" value={todoInputs.endDate} />
      <button className="form-btn" type="submit">Create</button>
    </form>
  )
}
