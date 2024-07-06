
import logo from "../../images/logo.svg"
const LoginBanner = ({children}) => {
  return (
    <div className='banner'>
        <img src={logo}  className='logo' alt="img"/>
        <h1>sign in </h1>
        <div></div>
        {children}
    </div>
  )
}

export default LoginBanner