import React from 'react'
import { Link } from 'react-router-dom'

const Landing = (): JSX.Element => (
  <div>
    <h1>チュートリアルを集めて</h1>
    <ul>
      <li>
        <Link to="/app">App (Main)</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/timer">Timer</Link>
      </li>
    </ul>
  </div>
)

export default Landing
