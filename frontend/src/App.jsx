import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoProvider from "./components/TodoProvider";
import "./index.css"


export default function App() {
  return (
    <TodoProvider>
    <div className="app">
      <h1 className="main-heading">Todo App</h1>
      <TodoCreate />
      <TodoList />
    </div>
    </TodoProvider>
  )
}
