import React, { Component } from 'react'

const Amount = ({ amount, onIncrement, onDecrement }) => (
  <div>
    <span>US Dollar: {amount}</span>
    <button type="button" onClick={onIncrement}>
      +
    </button>
    <button type="button" onClick={onDecrement}>
      -
    </button>
  </div>
)

export default Amount
