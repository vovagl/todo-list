
function Footer(props) {


    return (

        <div className="wrapper">
            <div className="panel">
                <p className="list-todo">{props.active.length} items left</p>
                <button onClick={() => props.setState('All')}>All</button>
                <button onClick={() => props.setState('Active')}>Active</button>
                <button onClick={() => props.setState('Completed')}>Completed</button>
                <button onClick={() => props.clearTodo()}>Clear completed</button>
            </div>
            <div className="panel-1"></div>
            <div className="panel-2"></div>
        </div>


    )

}
export default Footer;