import React, {Component} from 'react';
import ToDos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import './App.css';
// import uuid from 'uuid';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import axios from 'axios';


class App extends Component{

  state = {
     todos: [
      //  {  
      //    id: uuid.v4(),
      //    title: 'take out trash',
      //    completed: false
      //  },
      //  {  
      //   id: uuid.v4(),
      //   title: 'wash clothes',
      //   completed: true
      // },
      // {  
      //   id: uuid.v4(),
      //   title: 'learn react',
      //   completed: false
      // }
     ]
  }
    // axios.get('/api/todos')
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(
        resp => {
        console.log(resp);
        this.setState({
            todos : resp.data
        })
     })     
    .catch(err => {
      console.log(err);
    })
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(
        resp => {
        console.log(resp);
        this.setState({todos:[...this.state.todos.filter(todo =>
                todo.id !== id
            )]
          })
     })     
    .catch(err => {
      console.log(err);
    })
    // this.setState({todos:[...this.state.todos.filter(todo =>
    //       todo.id !== id
    //   )]
    // })
    
  }
  //  axios.post('/api/todos'
  addToDo = (title) => {
    console.log(title);
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res =>{
      this.setState({todos: [...this.state.todos, res.data]})
    })
    .catch(err => {
       console.log(err);
    })
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // }
    
  }

  render(){   
    // console.log(this.state.todos)  
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
             <Route path="/" render={props=>(
                <React.Fragment>
                   <ToDos todos= {this.state.todos} markComplete={this.markComplete}
                delTodo= {this.delTodo}/>
            <AddToDo addToDo={this.addToDo}/>
                </React.Fragment>
             )}/>
            <Route path="/about" component={About}/>
          </div>     
       </div>
      </Router>
      
    );
  }
}

export default App;
