# Simple CRUD Todo Application

Welcome to the Todo-Application! This repository contains the server-side as well as client-side code for our Todo application.

Client-side was build using react with vite and Vanilla CSS for styling and the backend was build using node.js, express.js and Mongodb for database.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.
- [MongoDB](https://www.mongodb.com/) installed and running on your local machine (if applicable).  

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MohdSaquib114/Todo-Assignment.git

   ```

2. **Go to the backend directory**

   ```bash
   cd backend

   ```

3. **Install dependencies**

   ```bash
   npm install

   ```

4. **Create environment variable (.env) file in ./Backend/ and add below variables in .env file**

   ```plaintext
   PORT = 4000
   DATABASE_URL = Your  remote or local mongoDB database url
   
   ```

5. **Start the backend project**

   ```bash
   npm start

   ```

6. **To Start the backend project for development**

   ```bash
   npm run dev

   ```

7. **Go to the react or ./frontend directory**

   ```bash
   cd..
   cd frontend

   ```

8. **Install dependencies**

   ```bash
   npm install

   ```
9. **Change api endpoints url in ./frontend/components/Todo with your local url**

   - From  
   ```bash
    try{
        await axios.put(`https://todo-assignment-pvsm.onrender.com/api/todo/${id}`,todoUpdateState)
         alert("Todo updated")
         setUpdate(false)
         const response = await axios.get("https://todo-assignment-pvsm.onrender.com/api/todos")
         setTodoList(response.data.data)
    
       }
   ```
   - To:  
   ```bash
    try{
        await axios.put(`http://localhost:your-port-number/api/todo/${id}`,todoUpdateState)
         alert("Todo updated")
         setUpdate(false)
         const response = await axios.get("http://localhost:your-port-number/api/todos")
         setTodoList(response.data.data)
    
       }
   ```
### Do above  for componets/TodoCreate.jsx & components/TodoList.jsx also

10. **Start react application**

   ```bash
   npm run dev
   ```
