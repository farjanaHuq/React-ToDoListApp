import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import { Flex, Item } from 'react-flex';

export class AddToDo extends Component {
  state = {
      title: ''
  }

  onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSubmit = (e) => {
 
      e.preventDefault();
      this.props.addToDo(this.state.title);
      this.setState({title: ''})
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
          <input 
          type ='text' 
          name='title' 
          style={{flex:'10', padding: '5px'}}
          placeholder='Add To do...'
          value={this.state.title}
          onChange={this.onChange}
          />
         <input 
           type="submit" 
           value="Submit" 
           class="btn"
           style={{flex:'1'}}

           />

      </form>
    )
  }
}

AddToDo.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete:PropTypes.func.isRequired,
  delTodo:PropTypes.func.isRequired
}

const formStyle = {
    paddingTop: '15px',
    display: 'flex'
}
export default AddToDo;

