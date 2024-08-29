// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'
import './index.css'

const Login = props => {
  const logInBtn = async () => {
    console.log('login')
    const userData = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    console.log(response)

    if (response.ok) {
      const getToken = data.jwt_token
      console.log(getToken)
      Cookies.set('jwt_token', getToken, {expires: 1})
      const {history} = props
      history.replace('/')
    } else {
      console.log(data.error_msg)
    }
  }

  const getAcessTokens = Cookies.get('jwt_token')

  return getAcessTokens !== undefined ? (
    <Redirect to="/" />
  ) : (
    <div className="login">
      <h1>Please Login</h1>
      <button onClick={logInBtn}>Login with Sample Creds</button>
    </div>
  )
}
export default withRouter(Login)
