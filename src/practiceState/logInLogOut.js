/* eslint-disable no-unused-expressions */
import React from 'react';

export default class LogInLogOut extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isLogged: true,
      login: "Zalogowano!",
      logout: "Wylogowano!"
    }
    this.changeLog = this.changeLog.bind(this);
    this.log = this.log.bind(this);
  }

  changeLog = () => {

      this.setState(actualState =>{
         var updateState = actualState.isLogged
          if (updateState === true) {
            updateState = false;
            
          } else {
            updateState = true;
            
          }
          return{
          isLogged: updateState
          }
      });
    }

      log = () => {
          if (this.state.isLogged){
              return this.state.login
          }else {
            return this.state.logout
          }
      }

render (){

   let logInfo = this.state.isLogged ? this.state.login : this.state.logout;
   
    let buttonInfo = this.state.isLogged ? "Wyloguj" : "Zaloguj";

  return (
    <div>
      <button onClick={this.changeLog}>{buttonInfo}</button>
       <p>{logInfo}</p>
    
    </div>
  )
}

  
}