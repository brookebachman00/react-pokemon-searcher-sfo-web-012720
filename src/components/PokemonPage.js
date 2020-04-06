import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      pokemon: [],
      search: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokemonData => {
      console.log(" component did mount", pokemonData) 
      this.setState({
        pokemon: pokemonData
      })
    })
  }

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
   
}

  filterPokemon =() => (
    this.state.pokemon.filter((onePoke) => {
     return onePoke.name.includes(this.state.search)
    })

  )

  formComplete = () => {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokemonData => {
      console.log(" component did mount", pokemonData) 
      this.setState({
        pokemon: pokemonData
      })
    })
  }
    
  render() {
    let filteredPokemon = this.filterPokemon()
    //this.filteredPokemon === []? this.state.pokemon : this.filteredPokemon
    console.log( "this is the filter method", filteredPokemon)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onFormComplete={this.formComplete}/>
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection pokemon={filteredPokemon}  />
      </Container>
    )
  }
}

export default PokemonPage
