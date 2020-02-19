import React from 'react';
import styles from "../style.css"


class AddOption extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      bestColor: "Blue"
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

  const areYouOK = this.state.isFriendly ? "friendly" : "not friendly";

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
      />Is Friendly?
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

        <br /><br />

    <label>The best color: </label>
      
        <select 
        value={this.state.bestColor}
        onChange={this.handleChange}
        name="bestColor"
        >
        <option value ="Blue">Blue</option>
        <option value ="Yellow">Yellow</option>
        <option value ="Red">Red</option>
        <option value ="Black">Black</option>
        <option value ="Magenta">Magenta</option>
        <option value ="Orange">Orange</option>
        </select>

      

    <h1>{this.state.firstName} {this.state.lastName}</h1> 
    <h2>You are {areYouOK} {this.state.gender}</h2>
    <h2>The color You like the most is {this.state.bestColor}</h2>

    <button type="submit">Submit!</button>

    </form>

  );

}

}

export default AddOption;
