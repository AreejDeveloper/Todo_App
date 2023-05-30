import React from 'react';
import Navbar from './Component/Navbar';
import Todos from './Component/Todos';
import Footer from './Component/Footer';
import { useEffect, useState } from 'react';
import AddTodo from './Component/AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, detail) => {
    let id;
    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[0].id + 1;
    }
    let newTodo = {
      id: id,
      title: title,
      detail: detail
    };
    setTodos([newTodo, ...todos]);
    console.log('data: ', title, detail, newTodo);
  };

  const onDelete = (todo) => {
    console.log('I am onDelete', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const searchTodo = (filteredTodos) =>{
    if(filteredTodos.length===0)
    {
      alert("No data found...");
      return;
    }
    setTodos(filteredTodos);
  }
  const onUpdate = (updatedTodo, id) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        title: updatedTodo.title,
        detail: updatedTodo.detail,
      };
    }
    return todo;
  });

  // Move the updated todo to the beginning of the array
  const updatedTodoIndex = updatedTodos.findIndex((todo) => todo.id === id);
  if (updatedTodoIndex > -1) {
    const updatedTodo = updatedTodos.splice(updatedTodoIndex, 1)[0];
    updatedTodos.unshift(updatedTodo);
  }
  

  setTodos(updatedTodos);
};

  
  return (
    <div className="App">
      <Navbar todos={todos} searchTodo={searchTodo} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
      <Footer />
    </div>
  );
}

export default App;
