import React from 'react'
import { useHistory } from 'react-router-dom'

import './UserOrder.css'

const UserOrder = ({ userState }) => {
  const productMap = {
    'product-a': 'Product A',
    'product-b': 'Product B',
    'product-c': 'Product C',
  }
  const {
    user: { firstName, lastName, phoneNumber, email, products, address, city, state, zip },
  } = userState
  const history = useHistory()
  if (!userState.hasSubmittedForm) {
    history.push('/')
  }
  return (
    <div class="user-order">
      <header class="user-order__heading">
        <h2>Hi {firstName}</h2>
        <p>Thanks for filling that out!</p>
        <p>Please make sure your order is correct</p>
      </header>
      <div class="user-order__delivery-details">
        <h4>Deliver To</h4>
        <p>
          {firstName} {lastName}
        </p>
        <p>
          {address}, {city}, {state} {zip}
        </p>
        <p>{phoneNumber && phoneNumber}</p>
      </div>
      <ul className="user-order__order-details">
        <h4>Your Selected Products</h4>
        {products && products.map(product => <li>{productMap[product]}</li>)}
      </ul>
    </div>
  )
}

export default UserOrder
