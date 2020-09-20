import React from 'react'

const OrderWrapper = ({ children }) => {
  return (
    <div className="user-order-container">
      <div className="user-order">{children}</div>
    </div>
  )
}

export default OrderWrapper
