import React, { Component, Fragment } from 'react'
import Button from './components/Button'

class App extends Component{
  state = {
    todo_item: '',
    todos : ''
  }
  handleChange = (e) => {
    this.setState({
      todo_item : e.target.value
    })
  }
  remove = (item) => {
    if(item){
      this.setState({
        todos : this.state.todos.filter((itemList) => {
          return itemList !== item
        })
      })
    }
  }
  add = () => {
    if(this.state.todo_item){
      this.setState({
        todo_item : '',
        todos : [...this.state.todos, this.state.todo_item]
      })
    }
  }
  componentDidMount(){
    // Poderia chamar de uma API
    setTimeout(() => {
      this.setState({
        todos: [
          'Novo item',
          'Lavar a roupa',
          'Jogar LOL',
          'Estudar para a prova de Web'
        ]
      })
    }, 4000)
  }
  render(){
    return (
      <Fragment>
        { this.state.todos &&
        (
          <Fragment>
            <h1>Todo List</h1>
            <ul>
              {this.state.todos.map((item, index) => {
                return <li key={index}>{item} <Button onClick={() => {this.remove(item)}} type="remove">X</Button></li>
              })}
            </ul>
            <input type="text" value={this.state.todo_item} id="todo_item" placeholder="Digite uma tarefa" onChange={this.handleChange}/>
            <Button type="add" onClick={this.add}>Adicionar</Button>
          </Fragment>
        )
        || <h1>Carregando...</h1>}
      </Fragment>
    )
  }
}

export default App