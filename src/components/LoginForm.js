import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <Form className="login" onSubmit={handleSubmit}>
      <Card className='container justify-content-center'  style={{ width: '30rem' }}>    
        <Card.Body className="px-3 py-5">
          <h3 className="text-center mb-5">Log in to continue</h3>
            <Stack gap={2}>
              <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}  />
              </Form.Group>

              {error && <div className="error">{error}</div>}
              <button type="button" className="btn btn-outline-success" disabled={isLoading}>Log In</button>
            </Stack>
        </Card.Body>
      </Card>
    </Form>
  )
}

export default LoginForm