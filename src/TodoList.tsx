import React from "react";
import { ListTodo } from "./App";

type TodoListProps={
    todos:string;
    state:string;
    lists: ListTodo[];
    deleteTodo:(id:number)=>void;
    toggleTodo:(id:number)=>void;
}

const TodoList:React.FC<TodoListProps>=(props)=> {

    return (<div className="form">
        {props.lists.map((list) =>
            <div className="form-item" key={list.id}>
                <input className="input-item" type="checkbox" onClick={() => props.toggleTodo(list.id)} defaultChecked={list.status}></input>
                <p className='list' style={{ textDecoration: list.status? 'line-through':'none' , color: list.status? '#d7d7d7':'#000' }}>{list.task}</p>
                <button className="btn" onClick={() => props.deleteTodo(list.id)}>x</button>
            </div>)
        }
    </div >)
}

export default TodoList;