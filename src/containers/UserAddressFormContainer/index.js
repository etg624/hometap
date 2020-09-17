import { connect } from 'react-redux'

import UserAddressForm from '../../components/UserAddressForm'
import { submitForm } from './actions'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: ({ city, state, zip }) => {
      dispatch(submitForm({ city, state, zip }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddressForm)
