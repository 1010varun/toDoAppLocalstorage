import React, { useEffect, useState } from "react"
import TodoForm from './Components/TodoForm';
import Todos from "./Components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { Container } from "reactstrap"

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }
    // console.log({localTodos});
    // console.log("helo");
  }, []);

  const AddonTodos = todo => {
    // console.log(todo);
    setTodos([...todos, todo]);
  }

  useEffect(() => {
    // console.log("todos in setitem", todos);
    if(todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const RemoveTodo = id => {
    console.log("id = ", id);
    setTodos(todos.filter(todo => todo.todoid !== id));
  }

  return (
    <Container fluid>
      <h1>Todo with Local Storage</h1>
      <Todos todos={todos} removeTodo={RemoveTodo}/>
      <TodoForm AddonTodos={AddonTodos}/>

    </Container>
  )
}

export default App;
