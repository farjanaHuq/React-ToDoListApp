import React, {Component} from 'react';
import ToDos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import './App.css';
import uuid from 'uuid';

class App extends Component{

  state = {
     todos: [
       {  
         id: uuid.v4(),
         title: 'take out trash',
         completed: false
       },
       {  
        id: uuid.v4(),
        title: 'wash clothes',
        completed: true
      },
      {  
        id: uuid.v4(),
        title: 'learn react',
        completed: false
      }
     ]
  }
  //Toggle complete
  markComplete = (id) =>{
    // console.log('id', id);
    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
     }) })
  }
   //Delete Todo
  delTodo = (id) => {
    // console.log('id', id);
    this.setState({todos:[...this.state.todos.filter(todo =>
          todo.id !== id
      )]
    })
    
  }

  addToDo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){   
    // console.log(this.state.todos)  
    return (
  
      <div className="App">
        <div className="container">
          <Header/>
          <ToDos todos= {this.state.todos} markComplete={this.markComplete}
              delTodo= {this.delTodo}/>
          <AddToDo addToDo={this.addToDo}/>
        </div>     
      </div>
    );
  }
}

export default App;
