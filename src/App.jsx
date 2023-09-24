import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form>
    <label>Enter your name:
      <input
        type="text" 
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </label>
    <label>Enter your Email:
      <input
        type="text" 
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{email}</p>
    </label>
  </form>
  )
}

export default App
