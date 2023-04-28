import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

function AddTodo({todo, setTodo}) {

  const [value, setValue] = useState('')

  function saveTodo() {
    if (!value) return alert('Please write your task')
    setValue(value.trim())
    setTodo(
      [...todo, {
        id: uuidv4(),
        title: value,
        status: true
      }]
    )
    setValue('')
  }

  return (
    <div>
      <input placeholder="Write your task" value={value} onChange={ (e) => setValue(e.target.value)}/>
      <button onClick={saveTodo}>Save</button>
    </div>
  );
}

export default AddTodo;