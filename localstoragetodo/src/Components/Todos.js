import React from "react"
import { 
    ListGroup,
    ListGroupItem
} from "reactstrap"
import { FaTimes } from "react-icons/fa"


const Todos = ( {todos, removeTodo} ) => {
    return(
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.todoid}>
                    {todo.todoString}
                    <span id="todos" onClick={() => removeTodo(todo.todoid)}>
                        <FaTimes/>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>    
    )
}


export default Todos;