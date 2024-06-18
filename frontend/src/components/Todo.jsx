import { useContext, useState } from "react";
import "../index.css"
import TodoCreate from "./TodoCreate";
import axios from "axios";
import { TodoListProvider } from "./TodoProvider";

//Months arrray to get the array by data object getMonth() method
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
    
    //Create the instance of Date class for startDate and endDate to get month, day and year.
    const startDateFormat = new Date(startDate)
    const endDateFormat = new Date(endDate)
   
    //It set update state true or false 
    function handleClick(){
    setUpdate(!update)
    }
  
    //Sent reuest to backend to update the todo
    async function handleSubmit(e){
        e.preventDefault()
        if(todoUpdateState.title === "" || todoUpdateState.startDate === "" || todoUpdateState.endDate === "" ) return
       try{
        await axios.put(`https://todo-assignment-pvsm.onrender.com/api/todo/${id}`,todoUpdateState)
         alert("Todo updated")
         setUpdate(false)
         //Refetching the latest todo list to render after updating any todo
         const response = await axios.get("https://todo-assignment-pvsm.onrender.com/api/todos")
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

     {/*when update get true then form to update the todo get render*/}
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
