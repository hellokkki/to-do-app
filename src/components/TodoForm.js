
import React, { useState } from 'react';

const useInput = (inititalValue) => {
  const [value, setValue] = useState(inititalValue);
  
  
  const onChange = e => {
    setValue(e.target.value);
  }

  const clearInput = () => {
    setValue('');
  }

  return {
    value,
    onChange,
    clearInput
  }
}

 const TodoForm = ({ onSubmit }) => {
  
  const { value, onChange, clearInput } = useInput('')

 const handleSubmit = e => {
  e.preventDefault();
  onSubmit(value)
  console.log(e)
  clearInput();
 }

  return (
    handleSubmit,
    <div className='form-container'>
      <form className='todo-form' onSubmit={handleSubmit}>
      <h1>today's todos?</h1>
       <input 
       type='text'
       placeholder='type me!'
       value={value}
       name='todo'
       className='todo-form--input'
       onChange={onChange}
       />
       <button className='todo-form--button'>add todo</button>
      </form>
    </div>
  )
}

export default TodoForm