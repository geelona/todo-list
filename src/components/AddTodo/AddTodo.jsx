import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './Addtodo.module.scss'

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
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl placeholder="Write your task" value={value} onChange={ (e) => setValue(e.target.value)}/>
        <Button onClick={saveTodo} className={s.btn}>Save</Button>
      </Col>
    </Row>
  );
}

export default AddTodo;