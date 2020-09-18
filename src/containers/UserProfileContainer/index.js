import { connect } from 'react-redux'

import UserProfile from '../../components/UserProfile'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

export default connect(mapStateToProps)(UserProfile)
