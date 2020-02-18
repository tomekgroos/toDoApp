import React from 'react';


class GetFromApi extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      loading: false,
      character: {}
    }
  }
  
// promises and fetch from API

componentDidMount() {
  this.setState({loading: true})
  fetch("https://swapi.co/api/people/4")
  .then(response => response.json())
  .then(data => {
    this.setState({
      loading: false,
      character: data
    })
  })
}

render() {
  const text = this.state.loading ? "LoadingDarkLord..." : this.state.character.name

  return(
    <div>
      <p>{text}</p>
    </div>
  );

}

}



export default GetFromApi;
