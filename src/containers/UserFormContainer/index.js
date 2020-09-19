import { connect } from 'react-redux'

import UserForm from '../../components/UserForm'
import { submitForm } from './actions'

const mapStateToProps = ({ userState }) => {
  return {
    httpError: userState.error,
    hasSubmittedForm: userState.hasSubmittedForm,
    loading: userState.loading,
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
