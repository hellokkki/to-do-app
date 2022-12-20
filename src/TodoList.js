
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

function TodoList() {
  const [todos, setTodos] = useState([]);


  const addTodo = value => {
    const updatedList = [...todos, value];

    setTodos(updatedList);
  }

  return (
    <div>
     <h1>today's todos?</h1>
     <TodoForm onSubmit={addTodo}/>
     {
      todos.map(todo => (
        <TodoListItem key={Math.floor(Math.random() * 1000)}>{todo}</TodoListItem>
      ))
     }
    </div>
  )
}

export default TodoList
