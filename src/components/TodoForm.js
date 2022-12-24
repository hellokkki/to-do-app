
import React, { useState } from 'react';

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

 const TodoForm = ({ onSubmit }) => {
  
  const { value, onChange } = useInput('')

 const handleSubmit = e => {
  e.preventDefault();
  onSubmit(value)
  console.log(e)
 }

  return (
    handleSubmit,
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
       <input 
       type='text'
       placeholder='Add a todo'
       value={value}
       name='todo'
       className='todo-input'
       onChange={onChange}
       />
       <button className='todo-button'>add todo</button>
      </form>
    </div>
  )
}

export default TodoForm