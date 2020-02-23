import React from 'react';


function FormComponent (props) {

  return (
    <main>
      <h1>Please Fill the Form</h1>
    <form>
      <label>Enter Name: </label>
      <input type="text" name="firstName"
        onChange={props.handleChange}
        value={props.data.firstName} />

      <br />    <br />
      <label>Enter Surname: </label>
      <input type="text" name="lastName"
        onChange={props.handleChange}
        value={props.data.lastName} />

      <br />  <br />
      <label>Enter Age: </label>
      <input type="text" name="age"
        placeholder="enter age in number"
        onChange={props.handleChange}
        value={props.data.age} />

      <br />  <br />
      <label>
        <input
          type="checkbox"
          name="isVegetarian"
          checked={props.data.isVegetarian}
          onChange={props.handleChange}
        /> Vegeterian?
</label>

      <br />

      <label>
        <input
          type="checkbox"
          name="isVegan"
          checked={props.data.isVegan}
          onChange={props.handleChange}
        /> Vegan?
</label>

      <br />

      <label>
        <input
          type="checkbox"
          name="isKetogenic"
          checked={props.data.isKetogenic}
          onChange={props.handleChange}
        /> Ketogenic?
</label>

      <br />

      <label>
        <input
          type="checkbox"
          name="isKosher"
          checked={props.data.isKosher}
          onChange={props.handleChange}
        /> Kosher?
</label>

      <br />

      <label>
        <input
          type="checkbox"
          name="isLactoseFree"
          checked={props.data.isLactoseFree}
          onChange={props.handleChange}
        /> Lactose Free?
</label>

      <br /> <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handleChange}
        /> Male
</label>

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handleChange}
        /> Female
</label>

      <br /><br />

      <label>Where Do You want to go? </label>

      <select
        value={props.data.destination}
        onChange={props.handleChange}
        name="destination"
      >
        <option value="">Please Choose destination</option>
        <option value="Mallorca">Mallorca</option>
        <option value="Siena">Siena</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Kolombo">Kolombo</option>
        <option value="Hanoi">Hanoi</option>
      </select>

      <br />
      <hr />
      <h2>Entered information</h2>

      <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>Your dietary restrictions: </p>
      <p>Vegeterian: {props.data.isVegetarian ? "Yes" : "No"} </p>
      <p>Vegan: {props.data.isVegan ? "Yes" : "No"} </p>
      <p>Ketogenic: {props.data.isKetogenic ? "Yes" : "No"}</p>
      <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
      <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"} </p>


      <button type="submit">Submit!</button>

      </form>
    </main>
  );
}

export default FormComponent;