import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../../base.css'
import Header from '../Header/Header'
import Routes from '../Routes/Routes'

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes />
    </div>
  </Router>
)

export default App
