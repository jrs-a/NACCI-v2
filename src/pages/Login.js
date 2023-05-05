import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="container authform">
      <form className="login" onSubmit={handleSubmit}>
        <h3 className="mb-4">Log In</h3>
        
        <label>Email address:</label>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <label>Password:</label>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />

        <button className="btn btn-outline-success" disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
      </form>
      <div className="text-center">
        <p>Don't have an account?</p>
        <Link to="/Signup"> Create an account </Link>
      </div>
    </div>
  )
}

export default Login