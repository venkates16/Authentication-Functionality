// Write your JS code here

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogOutButton = props => {
  const logOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogOutButton)
