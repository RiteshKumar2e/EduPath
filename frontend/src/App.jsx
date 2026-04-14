import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/layout/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
        <Toaster position="top-center" />
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App
