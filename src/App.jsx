import React, { useState } from 'react'
import './App.scss'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'
import { Container } from 'react-bootstrap'

function App() {
  
  const [todos, setTodos] = useState([]);

  return (
  <Container>
    <Header />
    <AddTodo todo={todos} setTodo={setTodos}/>
    <TodoList todo={todos} setTodo={setTodos} />
  </Container>
  )
}

export default App
