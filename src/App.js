// Sample project for the tutorial at https://www.robinwieruch.de/react-render-props-pattern/
import React from 'react'
import Amount from './components/Amount'
import Euro from './components/Euro'
import Pound from './components/Pound'

/*
  Render prop pattern => Instead of passing the currency components as components, we are passing a function that renders them. 

  Note how this allows the wrapping component (Amount) the ability to pass data to its inner composed components. The children prop becomes children as a function instead of simply being React components.

  Let's create a render prop (the name can be arbitrary; let's keep it simple for this example) that simply contains the function to be invoked when our render prop component (Amount) is ready to pass its value to the composed components.
*/

const App = () => (
  <Amount
    renderAmountOne={amount => (
      <div>
        <h2>My one Amount</h2>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
    renderAmountTwo={amount => (
      <div>
        <h2>My other Amount</h2>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  />
)

export default App
