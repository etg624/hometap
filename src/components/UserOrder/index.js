import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import OrderDetails from './OrderDetails'
import OrderWrapper from './OrderWrapper'

import './UserOrder.css'

const UserOrder = ({ userState, setStep }) => {
  const { user } = userState
  const [hasAcceptedOrder, setHasAcceptedOrder] = useState(false)
  const history = useHistory()
  const handleGoBack = () => {
    setStep(1)
    history.goBack()
  }

  const handleOrderAccept = () => setHasAcceptedOrder(true)

  if (!userState.hasSubmittedForm) {
    history.push('/')
  }

  return hasAcceptedOrder ? (
    <OrderWrapper>
      <p>Thanks {user.firstName} your order is being processed</p>
    </OrderWrapper>
  ) : (
    <OrderWrapper>
      <OrderDetails
        userDetails={user}
        handleGoBack={handleGoBack}
        handleOrderAccept={handleOrderAccept}
      />
    </OrderWrapper>
  )
}

export default UserOrder
