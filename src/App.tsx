import TodoForm from './TodoForm.tsx';
import TodoList from './TodoList.tsx';
import { useState } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import './App.css';
import React from 'react';

export type ListTodo={
  id:number;
  task:string;
  status:boolean;
}

const App: React.FC=()=> {
  const [todos, setTodos] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [lists, setLists] = useState<ListTodo[]>([]);

  let copiLists = [...lists];

  const formTodo=(e:React.ChangeEvent<HTMLInputElement>):void=> {
    setTodos(e.target.value)
  }

  const addTodo=():void=> {
    if (lists) {
      const newItem = {
        id: Math.random(),
        task: todos,
        status: false,
      }
      setLists([...lists, newItem])
    }
  }

  const deleteTodo=(id:number):void=> {
    setLists(lists.filter((list) => list.id !== id))
  }

  const clearTodo=():void=> {
    setLists(lists.filter((list) => list.status === false))
  }

  const toggleTodo=(id:number):void=> {
    setLists(lists.map(list => list.id === id ? { ...list, status: !list.status } : { ...list }))
  }

  const enterPress=(e:React.KeyboardEvent<HTMLInputElement>):void=> {
    if (e.key === 'Enter' && todos.trim().length > 0) {
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
        <TodoForm onChange={formTodo} onKeyDown={enterPress} todos={todos} />
        <TodoList todos={todos} state={state} lists={copiLists} deleteTodo={(id:number) => deleteTodo(id)} toggleTodo={(id:number) => toggleTodo(id)} />
        {lists.length > 0 &&
          <Footer setState={setState} lists={copiLists} clearTodo={() => clearTodo()} active={active} />}
      </div>
    </div>
  );
}

export default App;