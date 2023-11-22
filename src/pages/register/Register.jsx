import './register.css'

export default function Register() {
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Anzar Online</h3>
                <span className="loginDesc">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='Username' className="loginInput" />
                    <input type="email" placeholder='Email' className="loginInput" />
                    <input type="password" placeholder='Password' className="loginInput" />
                    <input type="password" placeholder='Confirm password' className="loginInput" />
                    <button className='loginButton'>Sign Up</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className='loginRegisterButton'>Log into your account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
