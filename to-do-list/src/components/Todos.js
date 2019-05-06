import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends Component{
    // markComplete = (e) =>{
    //        console.log('hello');
    // }
  render(){   
    // console.log(this.props.todos)  
    return this.props.todos.map((todo) => (
        <ToDoItem key={todo.id} todo = {todo} markComplete={this.props.markComplete}
            delTodo = {this.props.delTodo}/>
    ));
  }
}

//Proptypes - validation for properties that a component should have, we can set the type,
// we cant wheather it's required or not 
ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default ToDos;
