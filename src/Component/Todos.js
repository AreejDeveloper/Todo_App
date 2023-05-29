import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  let myStyle ={
    // minHeight: "70vh",
    // margin: "40px auto",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between"
  }
    return (
    <div className="container" style={myStyle}>
      <h3 className="text-center">Todos List</h3>
      {props.todos.length === 0 ? (
        <p className="text-center">No todos to display!</p>
      ) : (
        props.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} onUpdate={props.onUpdate}/>
        ))
      )}
    </div>
  );
};

export default Todos;
