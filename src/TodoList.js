
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import { useId } from "react-id-generator";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [id] = useId();

  const addTodo = value => {
   
  // const newList = [...todos, value] 
  const todo = {
     text: value,
     id: id + `${value}`
  }
 
  setTodos([...todos, todo]);
}
  

  const removeTodo = ({todo}) => { 
    console.log('should work')
    console.log(todo.text)
    return setTodos(todos => todos.filter((todo)  => todo !== todo.text ))
  }

  return (
    <div>
     <h1>today's todos?</h1>
     <TodoForm onSubmit={addTodo}/>
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
  )
}

export default TodoList
