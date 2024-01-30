// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="random-container">
          <h1 className="inside-heading">Random Number</h1>
          <p className="inside-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="inside-button" onClick={this.changeRandomNumber}>
            Generate
          </button>
          <p className="final-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
