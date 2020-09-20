import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../formComponents/Button'

import './UserOrder.css'

const UserOrder = ({ userState, setStep }) => {
  const productMap = {
    'product-a': 'Product A',
    'product-b': 'Product B',
    'product-c': 'Product C',
  }
  const {
    user: { firstName, lastName, phoneNumber, email, products, address, city, state, zip },
  } = userState
  const history = useHistory()

  const handleGoBack = () => {
    setStep(1)
    history.goBack()
  }

  if (!userState.hasSubmittedForm) {
    history.push('/')
  }
  return (
    <div className="user-order">
      <header className="user-order__heading">
        <h2>Hi {firstName}</h2>
        <p>Thanks for filling that out!</p>
        <p>Please make sure your order is correct</p>
      </header>
      <div className="user-order__delivery-details">
        <h4>Deliver To</h4>
        <p>
          {firstName} {lastName}
        </p>
        <p>{email}</p>
        <p>
          {address}, {city}, {state} {zip}
        </p>
        <p>{phoneNumber && phoneNumber}</p>
      </div>
      <ul className="user-order__order-details">
        <h4>Your Selected Products</h4>
        {products && products.map(product => <li key={product}>{productMap[product]}</li>)}
      </ul>
      <Button text="Everything looks good!" />
      <Button onClick={handleGoBack} text="I need to fix something" />
    </div>
  )
}

export default UserOrder
