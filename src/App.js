// Sample project for the tutorial at https://www.robinwieruch.de/react-render-props-pattern/
import React, { Component } from 'react'
import Amount from './components/Amount'
import Euro from './components/Euro'
import Pound from './components/Pound'

/*
  Render prop pattern => Instead of passing the currency components as components, we are passing a function that renders them. 

  Note how this allows the wrapping component (Amount) the ability to pass data to its inner composed components. The children prop becomes children as a function instead of simply being React components.
*/

const App = () => (
  <Amount>
    {amount => (
      <div>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  </Amount>
)

export default App
