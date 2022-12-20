
import React, { useState } from 'react'

const TodoListItem = props => {
const [todo, setTodo] = useState('')
    

  const removeTodo = id => {
    setTodo(prevState => {
        prevState.filter(todo => todo.id !== id);
    })
  }

  return (
    <div className='todo-list-item' onClick={removeTodo}>
      <p>{props.children}</p>
    </div>
  )
}

export default TodoListItem;