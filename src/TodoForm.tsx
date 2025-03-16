import React from "react";

type TodoFormProps={
    onKeyDown:(e: React.KeyboardEvent<HTMLInputElement>)=>void;
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
    todos:string;
}

const TodoForm:React.FC<TodoFormProps>=(props) =>{
    return (
        <input className="input" onKeyDown={props.onKeyDown} onChange={props.onChange}
            type="text" value={props.todos} placeholder="What needs to be done?" />
    )
}
export default TodoForm;