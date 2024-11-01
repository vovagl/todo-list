

function TodoForm(props) {
    return (
        <input className="input" onKeyPress={props.onKeyPress} onChange={props.onChange}
            type="text" value={props.todos} placeholder="What needs to be done?" />
    )
}
export default TodoForm;