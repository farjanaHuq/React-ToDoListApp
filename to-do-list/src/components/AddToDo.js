import React, { Component } from 'react';
// import { Flex, Item } from 'react-flex';

export class AddToDo extends Component {
  render() {
    return (
      <form style={formStyle}>
          <input 
          type ='text' 
          name='title' 
      
          style={{flex:'10', padding: '5px'}}
          placeholder='Add To do...'

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

const formStyle = {
    paddingTop: '15px',
    display: 'flex'
}
export default AddToDo;

