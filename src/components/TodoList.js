
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import { useId } from "react-id-generator";
import CustomScroll from 'react-custom-scroll';


function TodoList() {

  const [id] = useId();
  const [todos, setTodos] = useState(() => {
    let value;
    try { 
      value = JSON.parse(window.localStorage.getItem('todos') || '')
    } catch(error) {
      alert('something is realy wrong')
    }
   return value;
});


  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = value => {

    if (value === '') return;
   
  const todo = {
     text: value,
     id: id + `${value}`
  }

  setTodos([...todos, todo]);
}

  

  const removeTodo = ({todo}) => { 
    const elementToRemove = todo.id
    return setTodos(todos => todos.filter( todo  => todo.id !== elementToRemove ))
  }

  return (
    <div className='todo-display'>
        <div className='todo-display--form'> 
     <TodoForm onSubmit={addTodo}/>
     </div>
     <div 
       className='todo-display--list'
      >
      <CustomScroll
     heightRelativeToParent='calc(100% - 1rem)'
     
     >
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
     </CustomScroll>
     </div>
   
    </div>
  )
}

export default TodoList

