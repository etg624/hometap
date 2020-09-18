import { connect } from 'react-redux'

import UserAddressForm from '../../components/UserAddressForm'
import { submitForm } from './actions'

const mapStateToProps = ({ user }) => {
  return {
    httpError: user.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: formData => {
      dispatch(submitForm(formData))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddressForm)
