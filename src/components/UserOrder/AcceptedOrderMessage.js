import React from 'react'

const AcceptedOrderMessage = ({ name }) => {
  return (
    <div className="user-order-container">
      <div className="user-order">
        <p>Thanks {name} your order is being processed</p>
      </div>
    </div>
  )
}

export default AcceptedOrderMessage
