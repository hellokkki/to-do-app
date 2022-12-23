
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = value => {
  // const newList = [...todos, value] 
 
  setTodos(todos => [...todos, value]);
}
  

  const removeTodo = e => { 
    const elementToRemove = e.target;
    console.log('should work')
    // const newList = todos.filter( todo => todo !== elementToRemove );
    // return setTodos(newList)
    return setTodos(todos => todos.filter( todo => todo !== elementToRemove ))
  }

  return (
    <div>
     <h1>today's todos?</h1>
     <TodoForm onSubmit={addTodo}/>
     {
      todos.map((todo, index) => (
        <TodoListItem key={index.toString()}
        onClick={e => removeTodo(e)}
        >{todo}</TodoListItem>
      ))
     }
    </div>
  )
}

export default TodoList
