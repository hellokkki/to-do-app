
import React, { useState } from 'react';

const TodoForm = () => {
   
  const useInput = (inititalValue) => {
    const [value, setValue] = useState(inititalValue);
    
    
    const onChange = e => {
      setValue(e.target.value);
    }

    return {
      value,
      onChange,
    }
  }

  const todo = useInput('');

 const handleSubmit = e => {
  e.preventDefault();
  console.log(todo.value);
  return todo.value;
 }

  return (
    handleSubmit,
    <div>
      <form className='todo-form'>
       <input 
       type='text'
       placeholder='Add a todo'
       value={todo.value}
       name='todo'
       className='todo-input'
       onChange={e => todo.onChange(e)}
       />
       <button className='todo-button'></button>
      </form>
    </div>
  )
}

export default TodoForm