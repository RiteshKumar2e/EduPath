import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-[#FDFDFF]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-light/5 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
