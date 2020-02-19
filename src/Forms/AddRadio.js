import React from 'react';


class AddRadio extends React.Component {

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
    type === "checkbox" ? this.setState({[name]: checked})
     : this.setState({[name]: value })
}

render() {

  return(
    <form>
      <input type="text" name="firstName" 
      onChange={this.handleChange} 
      value={this.state.firstName} />

      <br />    <br />

      <input type="text" name="lastName" 
      onChange={this.handleChange} 
      value={this.state.lastName} />
      
      <br />  <br />

    <textarea 
    value={this.value}
    onChange={this.handleChange} 
    />

    <br />     <br />

    <label>
      <input
      type="checkbox"
      name="isFriendly"
      checked={this.state.isFriendly} /*this.state.name === checked value*/
      onChange={this.handleChange}
      /> Is Friendly?
    </label>

    <br />
    
    <label>
      <input
      type="radio"
      name="gender"
      value="male"
      checked={this.state.gender === "male"} /*this.state.name === checked value*/
      onChange={this.handleChange}  
      /> Male
    </label>

    <br />

    <label>
      <input
      type="radio"
      name="gender"
      value="female"
      checked={this.state.gender === "female"}
      onChange={this.handleChange}
      /> Female
    </label>


    <h1>{this.state.firstName} {this.state.lastName}</h1> 
    <h2>You are {this.state.gender}</h2>
    </form>

  );

}

}

export default AddRadio;
