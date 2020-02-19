import React from 'react';


class Checkbox extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: ""
    }
      this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
      const {name, value, type, checked} = e.target
    //  ternary operator
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value })
}

render() {

  return(
    <form>
      <input type="text" name="firstName" 
      onChange={this.handleChange} 
      value={this.state.firstName} />
     
      <input type="text" name="lastName" 
      onChange={this.handleChange} 
      value={this.state.lastName} />
      
      <br />

    <textarea value={"wpisz tekst"} />

    <br />

  
  <label>
      <input
      type="radio"
      name="gender"
      checked={this.state.gender === "female"}
      onChange={this.handleChange}
      /> Is Friendly?
    </label>

    <br />

    

    <h1>{this.state.firstName} {this.state.lastName}</h1> 
    </form>

  );

}

}


export default Checkbox;
