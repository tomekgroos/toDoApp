import React from 'react';



export default class StateEx extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        isLoggedIn: false,
      }
  }

  render () {

    var login;

 
   if (this.state.isLoggedIn === true){
        login = "In"
  } else {
        login = "Out"
  }
    return(

    <p>{login}</p>
    );

  }
}

