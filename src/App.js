// Sample project for the tutorial at https://www.robinwieruch.de/react-render-props-pattern/
import React, { Component } from 'react'
import Amount from './components/Amount'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      amount: 0,
    }
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }))
  }

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1}))
  }

  render(){
    return (
      <div>
        <Amount amount={this.state.amount} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
        {/* 
          Imagine a scenario where you have currency components that need to use the value of amount.

          This approach will use lifting state to the parent component to render the currency components using the value in our Amount component: 
          
          <Euro amount={this.state.amount} />
          <Pound amount={this.state.amount} />
          
          This is a valid solution. The App component has turned into a stateful class component, and the Amount component is now a functional stateless component.
        */}
      </div>
    )
  }
}

export default App
