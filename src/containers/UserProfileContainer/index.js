import { connect } from 'react-redux'

import UserProfile from '../../components/UserProfile'

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps)(UserProfile)
