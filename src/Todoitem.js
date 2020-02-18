import React from 'react';

export default Todoitem;

function Todoitem(props) {

        const completedTaskStyle = {
          textDecoration: "line-through",
          color: "green"
        }
   
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.thing.completed} 
      onChange={() => props.handleChange(props.thing.id)} />
      
      <p style={props.thing.completed ? completedTaskStyle : null}>{props.thing.text}</p>
    </div>
  );
}


