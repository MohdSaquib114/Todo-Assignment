import { Request, Response, Router } from "express";
import Todo from "../schema";

const router = Router()

router.get("/todos", async (req:Request,res:Response) =>{
    try{
     const todos =   await Todo.find({});
     res.status(200).json({
        succes:true,
        data:todos
     })
    }catch(error){
        res.status(500).json({
            succes:false,
            error:"An error occured while fetching list of todos"
        })
    }
}
)

router.post("/todo", async (req:Request,res:Response) =>{
    try{
        const {title,startDate,endDate} = req.body
        const result = await Todo.create({
           title,startDate,endDate
         })

         res.status(200).json({
            succes:true,
            data:result
         })

    }catch(error){
        res.status(500).json({
            succes:false,
            error:"Insertion fail"
        })
    }
})

router.put("/todo/:id", async (req:Request,res:Response) =>{
    const { id } = req.params;
    const { title, startDate, endDate } = req.body;
  
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { title, startDate, endDate },
        { new: true, runValidators: true }
      );
  
      if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
  
      res.status(200).json(updatedTodo);
    } catch (error) {
      
      res.status(500).json({ message: 'An error occurred while updating the todo'});
    }
})

export default router