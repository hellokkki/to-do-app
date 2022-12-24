
import React from 'react';

import TodoList from './components/TodoList';
import './scss/styles.css';
import './main.scss'
import 'normalize.css'

const App = () => {

  return(
    <div className='App'>
     <TodoList />
    </div>
  )
}

export default App