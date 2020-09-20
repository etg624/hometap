import { connect } from 'react-redux'
import { actionCreators } from '../../actions/user-form-actions'

import UserOrder from '../../components/UserOrder'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = dispatch => {
  return {
    setStep: step => {
      dispatch(actionCreators.setStep(step))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserOrder)
