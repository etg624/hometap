import React from 'react'
import { useHistory } from 'react-router-dom'

const UserProfile = ({ userState }) => {
  const history = useHistory()
  if (!userState.hasSubmittedForm) {
    history.push('/')
  }
  return <div>{userState.user.firstName}</div>
}

export default UserProfile
