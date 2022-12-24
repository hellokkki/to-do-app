
import React from 'react'

const TodoListItem = ({ children, ...props }) => {
  
  return (
    <div className='todo-display--list__item' onClick={props.onClick}>
    {children}
    </div>
  )
}

export default TodoListItem;