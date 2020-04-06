import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (event) => {
    console.log("you clicked submit")
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
      name: this.state.name,
      stats: [{
        name: "hp",
        value: this.state.hp
      }],
      sprites : {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    
    })
    
  }) .then(() => this.props.onFormComplete())

}


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value; 
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  //make the post request to the backend
  

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleInputChange}fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleInputChange}fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleInputChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleInputChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
         <Form.Button>Submit </Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
