import React, { Component } from 'react'

class Amount extends Component {
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

  render () {
    return (
      <div>
        <span>US Dollar: {this.state.amount}</span>
        <button type="button" onClick={this.onIncrement}>+</button>
        <button type="button" onClick={this.onDecrement}>-</button>

        {/* 
          Imagine a scenario where you have currency components that need to use the value of amount.

          One naive approach is to simple render the currency components within Amount: 
          
          <Euro amount={this.state.amount} />
          <Pound amount={this.state.amount} />
          
          You could render components within Amount for simplicity. If there is no strong use case for having more control about what is rendered in Amount, this may be fine. However...the downside is that the Amount component now has to know about the currency components. Everytime the rendered output needs to be changed, the Amount component would be touched. What about leaving the component as it was and get the currency components outside of it?
        */}
      </div>
    )
  }
}

export default Amount