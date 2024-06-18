import { useContext, useState } from "react";
import "../index.css"
import TodoCreate from "./TodoCreate";
import axios from "axios";
import { TodoListProvider } from "./TodoProvider";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

export default function Todo({title,startDate,endDate,id}) {
    const {setTodoList} = useContext(TodoListProvider)
    const [update,setUpdate] = useState(false);
    const [todoUpdateState,settodoUpdateState] = useState({
        title:title,
        startDate:startDate,
        endDate:endDate
      })
    
    const startDateFormat = new Date(startDate)
    const endDateFormat = new Date(endDate)
   
    
    function handleClick(){
    setUpdate(!update)
    }
    async function handleSubmit(e){
        e.preventDefault()
        if(todoUpdateState.title === "" || todoUpdateState.startDate === "" || todoUpdateState.endDate === "" ) return
       try{
        await axios.put(`http://localhost:3000/api/todo/${id}`,todoUpdateState)
         alert("Todo updated")
         setUpdate(false)
         const response = await axios.get("http://localhost:3000/api/todos")
         setTodoList(response.data.data)
    
       }catch(e){
        
        alert(e.message)
       }
      }
      function  handleTitleChange(e){
        settodoUpdateState({
         ...todoUpdateState,
         title:e.target.value
        })
     }
     function  handleSrtDateChange(e){
        settodoUpdateState({
         ...todoUpdateState,
         startDate:e.target.value
        })
     }
     function  handleEndDateChange(e){
        settodoUpdateState({
         ...todoUpdateState,
         endDate:e.target.value
        })
     }
     
    
  return (
    <div className="todo" >
     <p style={{fontSize:"1.5rem"}}>{title}</p>
     <div style={{display:"flex", justifyContent:"space-between"}}>
     <p>Start Date: {`${startDateFormat.getDate()} ${months[startDateFormat.getMonth()]} ${startDateFormat.getFullYear()}`}</p> 
     <p>End Date: {`${endDateFormat.getDate()} ${months[endDateFormat.getMonth()]} ${endDateFormat.getFullYear()}`}</p>
     </div>
     <button onClick={handleClick} className="form-btn">Edit</button>
{update &&  <form onSubmit={handleSubmit} className="form">
      <label htmlFor="title">Title</label>
      <input onChange={handleTitleChange} name="title"  className="input" placeholder="Enter Todo Title" value={todoUpdateState.title} />
      <label htmlFor="start-date">Start Date</label>
      <input onChange={handleSrtDateChange} name="start-date" className="input" type="date" value={todoUpdateState.startDate} />
      <label htmlFor="end-date">End Date</label>
      <input onChange={handleEndDateChange} name="end-date" className="input" type="date" value={todoUpdateState.endDate} />
      <button className="form-btn" type="submit">Update</button>
    </form>}
    </div>
    
  )
}
