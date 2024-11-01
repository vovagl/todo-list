import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  const [todos, setTodos] = useState('');
  const [state, setState] = useState('');
  const [lists, setLists] = useState([]);

  let copiLists = lists;

  function formTodo(e) {
    setTodos(e.target.value)
  }

  function addTodo() {
    if (lists) {
      const newItem = {
        id: Math.random(),
        task: todos,
        status: false,
      }
      //setLists([newItem, ...lists])
      setLists([...lists, newItem])
    }
  }

  function deleteTodo(id) {
    setLists(lists.filter((list) => list.id !== id))
  }

  function clearTodo() {
    setLists(lists.filter((list) => list.status === false))
  }

  function toggleTodo(id) {
    setLists(lists.map(list => list.id === id ? { ...list, status: !list.status } : { ...list }))
  }

  function enterPress(e) {
    if (e.key === 'Enter' && todos.length > 0) {
      addTodo()
      setTodos('')
    }
  }

  switch (state) {
    case 'All':
      copiLists = lists
      break;
    case 'Active':
      copiLists = lists.filter(list => list.status === false)

      break;
    case 'Completed':
      copiLists = lists.filter(list => list.status === true)
      break;

    default:
      break;
  }

  let active = lists.filter(list => list.status === false)



  return (
    <div className="App">
      <Header />
      <div className="conteiner">
        <TodoForm onChange={formTodo} onKeyPress={enterPress} todos={todos} />
        <TodoList todos={todos} state={state} lists={copiLists} deleteTodo={(id) => deleteTodo(id)} toggleTodo={(id) => toggleTodo(id)} />
        {lists.length > 0 &&
          <Footer setState={setState} lists={copiLists} clearTodo={() => clearTodo()} active={active} />}
      </div>
    </div>

  );
}

export default App;
