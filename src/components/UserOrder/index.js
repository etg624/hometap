import React from 'react'
import { useHistory } from 'react-router-dom'

import './UserProfile.css'

const UserProfile = ({ userState }) => {
  const productMap = {
    'product-a': 'Product A',
    'product-b': 'Product B',
    'product-c': 'Product C',
  }
  // const {
  //   user: { firstName, lastName, phoneNumber, email, product, address, city, state, zip },
  // } = userState
  const history = useHistory()
  // if (!userState.hasSubmittedForm) {
  // history.push('/')
  // }
  const { firstName, lastName, phoneNumber, email, product, address, city, state, zip } = {
    firstName: 'Evan',
    lastName: 'Guirino',
    phoneNumber: '(626)257-0967',
    email: 'etg624@gmail.com',
    product: 'Product A',
    address: '612 E Orangewood DR',
    city: 'Covina',
    state: 'CA',
    zip: '91723',
  }
  return (
    <div class="user-order-data">
      <header>
        <h2>Hi {firstName}</h2>
        <p>Thanks for filling that out!</p>
        <p>Please make sure your order is correct</p>
      </header>
      <div>
        <h4>Deliver To</h4>
        <p>
          {firstName} {lastName}
        </p>
        <p>
          {address}, {city}, {state} {zip}
        </p>
        <p>{phoneNumber && phoneNumber}</p>
      </div>
      <div>
        <h4>Order Details</h4>
        <p>You Chose {product}</p>
      </div>
    </div>
  )
}

export default UserProfile