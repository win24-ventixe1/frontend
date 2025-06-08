import { useState } from 'react'

const LoginModal = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.(com|se)$/
    return pattern.test(email)
  }

  const handleLogin = async () => {
  if (!validateEmail(email)) {
    setError('Please enter this email: HansMattinLassei@domain.se')
    return
  }

  if (password.length < 5) {
    setError('Please use this password: BytMig123!')
    return
  }

  try {
    const res = await fetch('https://localhost:7105/api/accounts/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    if (!res.ok) {
      setError('Login failed. Check email or password.')
      return
    }

    const data = await res.json()
    localStorage.setItem('token', data.token)
    onLogin()
  } catch (err) {
    setError('Something went wrong. Please try again.')
  }
}

  return (
    <div className="login-modal">
      <div className="login-box">
        <h3 className="login-header">Login</h3>
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-text">{error}</p>}
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default LoginModal
