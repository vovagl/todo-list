



function TodoList(props) {

    //console.log(props.lists);



    return (<div className="form">
        {props.lists.map((list) =>
            <div className="form-item" key={list.id}>
                <input className="input-item" type="checkbox" onClick={() => props.toggleTodo(list.id)} defaultChecked={list.status}></input>
                <p className='list' style={{ textDecoration: list.status && 'line-through', color: list.status && '#d7d7d7' }}>{list.task}</p>
                <button className="btn" onClick={() => props.deleteTodo(list.id)}>x</button>
            </div>)
        }
    </div >)
}

export default TodoList;