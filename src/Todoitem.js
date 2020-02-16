import React from 'react';

export default Todoitem;

function Todoitem(props) {
      
   
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.thing.completed} 
      onChange={() => props.handleChange(props.thing.id)} />
      
      <p>{props.thing.text}</p>
    </div>
  );
}


