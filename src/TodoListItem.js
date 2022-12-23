
import React from 'react'

const TodoListItem = ({ children, ...props }) => {
  
  return (
    <div className='todo-list-item' onClick={props.onClick} key={props.key}>
    {children}
    </div>
  )
}

export default TodoListItem;