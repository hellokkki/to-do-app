
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const id = () => {
    return Math.floor(Math.random() * 10000);
  }


  const addTodo = value => {
  let newList = [...todos, value] 
 
  setTodos(newList);
}
  

  const removeTodo = key => { 
    setTodos(prevState => {
      prevState.filter(todo => todo !== key);
    })
  }

  return (
    <div>
     <h1>today's todos?</h1>
     <TodoForm onSubmit={addTodo}/>
     {
      todos.map(todo => (
        <TodoListItem key={id()}
        onClick={(e) => removeTodo(e)}>{todo}</TodoListItem>
      ))
     }
    </div>
  )
}

export default TodoList
