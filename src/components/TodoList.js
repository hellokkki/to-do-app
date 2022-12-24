
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import { useId } from "react-id-generator";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [id] = useId();

  const addTodo = value => {
   
  const todo = {
     text: value,
     id: id + `${value}`
  }
 
  setTodos([...todos, todo]);
  localStorage.setItem(`${todo}`, `${todo.text}`)
}
  

  const removeTodo = ({todo}) => { 
    const elementToRemove = todo.id
    return setTodos(todos => todos.filter( todo  => todo.id !== elementToRemove ))
  }

  return (
    <div className='todo-display'>
        <div className='todo-display--form'> 
      <h1>today's todos?</h1>
     <TodoForm onSubmit={addTodo}/>
     </div>
     <div className='todo-display--list'>
      {
      todos.map(todo => (
        <TodoListItem
        key={todo.id}
        onClick={() => removeTodo({todo}) }
        >
        {todo.text}
        </TodoListItem>
      ))
     }
     </div>
    </div>
  )
}

export default TodoList
