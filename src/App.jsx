import React, { useState } from 'react'
import './App.scss'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'

function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      status: true
    },
    {
      id: 2,
      title: 'Learn Redux',
      status: true
    },
    {
      id: 3,
      title: 'Learn React Router',
      status: false
    }
  ]);

  console.log(todos)

  return (
  <>
    <Header />
    <AddTodo />
    <TodoList todo={todos} setTodo={setTodos} />
  </>
  )
}

export default App
