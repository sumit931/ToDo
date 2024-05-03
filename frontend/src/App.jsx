import React from 'react'
import { useState } from 'react'
import AddTodo from './components/AddTodo';
import FetchTodo from './components/FetchTodo';

function App() {
const [updateFetchTodo ,setUpdateFetchTodo] = useState(false);
const toggleUpdateFetchTodo = () =>{
setUpdateFetchTodo(prevState => !prevState);
}
  return (
    <>
      <div>
        <AddTodo  onUpdate = {toggleUpdateFetchTodo}/>
        <FetchTodo shouldUpdate = {updateFetchTodo}/>
      </div>
    </>
  )
}

export default App
