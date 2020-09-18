import { connect } from 'react-redux'

import UserForm from '../../components/UserForm'
import { submitForm } from './actions'

const mapStateToProps = ({ user }) => {
  return {
    httpError: user.error,
    hasSubmittedSuccessfully: Object.values(user).some(value => value),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: formData => {
      dispatch(submitForm(formData))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
