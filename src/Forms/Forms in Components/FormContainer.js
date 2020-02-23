import React, {Component} from 'react';
import ComponentForms from "./ComponentForms"



class FormContainer extends Component {

  constructor(props) {
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
    const { name, value, type, checked } = e.target
    //  ternary operator
    type === "checkbox" ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }



  render() {
    return(
        <div>
          <ComponentForms 
          handleChange = {this.handleChange}
          data={this.state}
          />
          
        </div>
        );
      

  }
}

export default FormContainer;
