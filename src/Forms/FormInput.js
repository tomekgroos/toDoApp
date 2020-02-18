import React from 'react';


class FormInput extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    }
      this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
      const {name, value} = e.target

    this.setState({
      [name]: value
    })
  }

render() {

  return(
    <form>
      <input type="text" name="firstName" 
      onChange={this.handleChange} value={this.state.firstName} />
      <br />
      <input type="text" name="lastName" 
      onChange={this.handleChange} value={this.state.lastName} />
      <h1>{this.state.firstName}</h1> <h1>{this.state.lastName}</h1> 
    </form>
  );

}

}


export default FormInput;
