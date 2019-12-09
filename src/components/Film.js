import React, {Component} from 'react'

class Film extends Component{

  render(){
    return(
      <li className="Film">
      <h4>{this.props.children}</h4>
      <a>{this.props.name}</a>
      </li>
    )
  }
}

export default Film
