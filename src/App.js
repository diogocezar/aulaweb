import React, { Fragment } from 'react'
import Button from './components/Button'

const App = function(){
  return (
    <Fragment>
      <h1>Todo List</h1>
      <ul>
        <li>Lavar a roupa <Button type="remove">X</Button></li>
        <li>Jogar LOL <Button type="remove">X</Button></li>
        <li>Estudar para prova de web <Button type="remove">X</Button></li>
      </ul>
      <input type="text" id="todo_item" placeholder="Digite uma tarefa"/>
      <Button type="add">Adicionar</Button>
    </Fragment>
  )
}

export default App