import { connect } from 'react-redux'

import UserOrder from '../../components/UserOrder'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

export default connect(mapStateToProps)(UserOrder)
