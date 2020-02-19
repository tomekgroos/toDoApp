import React from 'react';
import styles from "../style.css"


class ComponentForms extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegetarian: false,
      isVegan: false,
      isKetogenic: false,
      isKosher: false,
      isLactoseFree: false
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
      <label>Enter Name: </label>
      <input type="text" name="firstName" 
      onChange={this.handleChange} 
      value={this.state.firstName} />

      <br />    <br />
      <label>Enter Surname: </label>
      <input type="text" name="lastName" 
      onChange={this.handleChange} 
      value={this.state.lastName} />
      
      <br />  <br />
      <label>Enter Age: </label>
      <input type="text" name="age" 
      placeholder="enter age in number"
      onChange={this.handleChange} 
      value={this.state.age} />

      <br />  <br />
    <label>
      <input
      type="checkbox"
      name="isVegetarian"
      checked={this.state.isVegetarian}
      onChange={this.handleChange}
      /> Vegeterian?
    </label>

    <br />

    <label>
      <input
      type="checkbox"
      name="isVegan"
      checked={this.state.isVegan}
      onChange={this.handleChange}
      /> Vegan?
    </label>

    <br />

    <label>
      <input
      type="checkbox"
      name="isKetogenic"
      checked={this.state.isKetogenic}
      onChange={this.handleChange}
      /> Ketogenic?
    </label>

    <br />

    <label>
      <input
      type="checkbox"
      name="isKosher"
      checked={this.state.isKosher}
      onChange={this.handleChange}
      /> Kosher?
    </label>

    <br />

    <label>
      <input
      type="checkbox"
      name="isLactoseFree"
      checked={this.state.isLactoseFree}
      onChange={this.handleChange}
      /> Lactose Free?
    </label>

    <br />
    
    <label>
      <input
      type="radio"
      name="gender"
      value="male"
      checked={this.state.gender === "male"}
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
        value={this.state.destination}
        onChange={this.handleChange}
        name="destination"
        >
        <option value ="">Please Choose destination</option>
        <option value ="Mallorca">Mallorca</option>
        <option value ="Siena">Siena</option>
        <option value ="Tokyo">Tokyo</option>
        <option value ="Kolombo">Kolombo</option>
        <option value ="Hanoi">Hanoi</option>
        </select>

      <br />
      <hr />
  <h2>Entered information</h2>
  <br />      
  <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
  <p>Your age: {this.state.age}</p>
  <p>Your gender: {this.state.gender}</p>
  <p>Your destination: {this.state.destination}</p>
    <p>Your dietary restrictions: </p>
    <p>Vegeterian: {this.state.isVegetarian ? "Yes" : "No"} </p>
    <p>Vegan: {this.state.isVegan ? "Yes" : "No"} </p> 
    <p>Ketogenic: {this.state.isKetogenic ? "Yes" : "No"}</p>
  <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
    <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"} </p>


    <button type="submit">Submit!</button>

    </form>

  );

}

}

export default ComponentForms;
