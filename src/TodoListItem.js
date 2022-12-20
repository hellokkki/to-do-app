
import React from 'react'

const TodoListItem = ({ children, onRemove }) => {
  
  return (
    <div className='todo-list-item' onClick={onRemove}>
      <p>{children}</p>
    </div>
  )
}

export default TodoListItem;