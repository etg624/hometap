import React from 'react'
import { useHistory } from 'react-router-dom'

const UserProfile = ({ userState }) => {
  const productMap = {
    'product-a': 'Product A',
    'product-b': 'Product B',
    'product-c': 'Product C',
  }
  const {
    user: { firstName, lastName, phoneNumber, email, product, address, city, state, zip },
  } = userState
  const history = useHistory()
  if (!userState.hasSubmittedForm) {
    history.push('/')
  }
  return (
    <div>
      {firstName}
      {lastName} {phoneNumber}
      {email} {productMap[product]}
      {address}
      {city} {state}
      {zip}
    </div>
  )
}

export default UserProfile
