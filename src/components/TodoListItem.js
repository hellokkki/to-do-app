
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const TodoListItem = ({ children, ...props }) => {
  
  return (
    <div className='todo-item' >
      <div className='todo-item--content'>
        {children}
      </div>
      <div className='todo-item--delete-icon'>
         <FontAwesomeIcon 
         icon={faTrash}
         onClick={props.onClick}
         />
      </div>
    </div>
  )
}

export default TodoListItem;