import React from 'react';
import Todoitem from './Todoitem';
import todoData from "./todoData";
import styles from "./style.css";



class App extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      data: todoData,
    }

    this.handleChange = this.handleChange.bind(this);
  }

    handleChange (id) {
      this.setState(prevState =>{
        const updateData = prevState.data.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        });
        return {
          data: updateData,
        }
      });
    }

  render (){

    const todoThings = this.state.data.map(
      thing => <Todoitem key={thing.id} thing={thing} 
      handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todoThings}
      </div>
    );
  }


}

export default App;
