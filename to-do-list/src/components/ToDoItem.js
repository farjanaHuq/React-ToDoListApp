import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through' : 'none'
        }
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    }
    
    // markComplete = (e) =>{
    //     console.log(this.props);
    // }
   
    render() {
        const {id, title } = this.props.todo;
        return (
        <div style = {this.getStyle()}>
            <p>
            <input type = 'checkbox' onChange={this.props.markComplete.bind(this,id)}/>
            {/* {this.props.todo.title} */}
            {title}
            <button onClick={this.props.delTodo.bind(this, id)} style ={btnStyle}>x</button>
            </p>
        </div>
        )
    }
}


ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '6px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default ToDoItem;
