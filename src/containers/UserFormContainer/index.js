import { connect } from 'react-redux'

import UserForm from '../../components/UserForm'
import { submitForm } from '../../actions/user-form-actions'

const mapStateToProps = ({ userState }) => {
  return {
    userState,
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
