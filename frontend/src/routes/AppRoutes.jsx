import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import CareerNavigator from '../pages/CareerNavigator/CareerNavigator'
import AdmissionPredictor from '../pages/AdmissionPredictor/AdmissionPredictor'
import LoanEligibility from '../pages/LoanEligibility/LoanEligibility'
import ROICalculator from '../pages/ROICalculator/ROICalculator'
import Timeline from '../pages/Timeline/Timeline'
import Documents from '../pages/Documents/Documents'
import ChatMentor from '../pages/ChatMentor/ChatMentor'
import DashboardLayout from '../components/layout/DashboardLayout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
      <Route path="/career-navigator" element={<DashboardLayout><CareerNavigator /></DashboardLayout>} />
      <Route path="/admission-predictor" element={<DashboardLayout><AdmissionPredictor /></DashboardLayout>} />
      <Route path="/loan-eligibility" element={<DashboardLayout><LoanEligibility /></DashboardLayout>} />
      <Route path="/roi-calculator" element={<DashboardLayout><ROICalculator /></DashboardLayout>} />
      <Route path="/timeline" element={<DashboardLayout><Timeline /></DashboardLayout>} />
      <Route path="/documents" element={<DashboardLayout><Documents /></DashboardLayout>} />
      <Route path="/chat-mentor" element={<DashboardLayout><ChatMentor /></DashboardLayout>} />
    </Routes>
  )
}

export default AppRoutes
