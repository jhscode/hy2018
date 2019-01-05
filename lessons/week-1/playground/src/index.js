import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import animals from './animals.js'

class App extends Component {
  state = {
    visitors: 0
  }
  handleClick = () => {
    const previous = this.state.visitors
    this.setState({
      visitors: previous + 1
    })
  }
  
  render() {
    // console.table(animals)

    // this could be refactored out of render method
    const renderAnimal = animal => (
      <div key={animal.picture}>
        <h2>{animal.name}</h2>
        <img src={animal.picture} alt="" />
      </div>
    )
    return (
      <div>
        {animals.map(renderAnimal)}

        <Counter CounterFunctional
          visitors={this.state.visitors}
          handleClick={this.handleClick} />
        <hr />
        <Counter 
          visitors={this.state.visitors}
          handleClick={this.handleClick} />
        <Counter 
          visitors={this.state.visitors}
          handleClick={this.handleClick} />
      </div>
    )
  }
}

const CounterFunctional = ({visitors, handleClick}) => (
  <div>
    You're visitor {visitors}
    <button onClick={handleClick}>Increment</button>
  </div>
)

class Counter extends Component {
  /*
  state = {
    visitors: 0
  }
  /*
  constructor() {
    super();
    this.state = {
      visitors: 0
    }
  }
  */

  render(){
    return(
      <div>
        You're visitor {this.props.visitors}
        <button onClick={this.props.handleClick}>Increment</button>
      </div>
    )
  }
}

class TwitterWidget extends Component {
  render() {
    return (
      <div className='twitter-widget'>
        <h2>Twitter Widget</h2>
        <p>Displaying 10 most recent tweets</p>
        ...
      </div>
    )
  }
}

class Button extends Component {
  handleClick() {
    alert('ha')
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>Page</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))
/*
ReactDOM.render(
  <>
    <Header />
    <Button />
    <TwitterWidget />
    <TwitterWidget />
    <TwitterWidget />
    <Counter />
  </>,
  document.getElementById("root")
)
*/