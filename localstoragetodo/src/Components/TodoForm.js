import React, { useState } from "react"
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    // InputGroupAddon,
    Button
} from "reactstrap"

import { v4 } from "uuid"
import "../App.css"

const TodoForm = ( {AddonTodos} ) => {

    const[todoString, setTodoString] = useState("");

    const handelSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Enter some Todo");
        };
        
        const todo = {
            todoString,
            todoid: v4()
        };

        AddonTodos(todo);
        setTodoString("");
    }
    return(
        <Form onSubmit={handelSubmit}>
                    <Input
                        type="text"
                        value={todoString}
                        id="todo"
                        name="todo"
                        onChange={e => setTodoString(e.target.value)}
                    />
                            <Button color="success">Add Todo</Button>
        </Form>
    )
}

export default TodoForm;