
import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);


  return (
    <div>
     <h1>today's todos?</h1>
     <TodoForm onSubmit={e => TodoForm.handleSubmit(e)}/>
    </div>
  )
}

export default TodoList
