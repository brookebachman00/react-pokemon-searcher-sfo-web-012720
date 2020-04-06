import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

 findHp = (props) => {
   let hpArray = this.props.onePokemon.stats
   let hp = hpArray.find((element) => element.name === "hp")
   let hpValue = hp.value
           return hpValue
   console.log( "this is findHP", hp)
   
 }

  render() {
    
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.props.onePokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.onePokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <p>{this.findHp()} </p>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
