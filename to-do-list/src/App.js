import React, {Component} from 'react';
import ToDos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import './App.css';


class App extends Component{

  state = {
     todos: [
       {  
         id: 1,
         title: 'take out trash',
         completed: false
       },
       {  
        id: 2,
        title: 'wash clothes',
        completed: true
      },
      {  
        id: 3,
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

  render(){   
    // console.log(this.state.todos)  
    return (
  
      <div className="App">
        <div className="container">
          <Header/>
          <ToDos todos= {this.state.todos} markComplete={this.markComplete}
              delTodo= {this.delTodo}/>
          <AddToDo/>
        </div>     
      </div>
    );
  }
}

export default App;
