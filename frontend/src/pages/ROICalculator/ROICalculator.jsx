import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Download,
  BarChart3,
  Target,
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card, InputField, StatCard, Section, Badge, ProgressBar, Divider } from '../../components/ui/premium/index'
import { DashboardLayout } from '../../components/layout/PremiumLayout'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    tuitionCost: '45',
    livingCost: '15',
    expectedSalaryStart: '100000',
    expectedSalaryMid: '150000',
    expectedSalaryEnd: '250000',
  })

  const [results, setResults] = useState(null)

  const calculateROI = () => {
    const totalCost = (parseFloat(inputs.tuitionCost) + parseFloat(inputs.livingCost)) * 100000 // Convert lakhs to actual
    const yearsToBreakEven = Math.ceil(totalCost / (parseFloat(inputs.expectedSalaryStart) * 0.1)) // Estimate years

    setResults({
      totalInvestment: totalCost,
      yearsToBreakEven: yearsToBreakEven,
      startingSalary: parseFloat(inputs.expectedSalaryStart),
      costPerMonth: totalCost / 12,
    })
  }

  const projectionData = [
    { year: 1, investment: -6000, cumulative: -6000 },
    { year: 2, investment: -4500, cumulative: -10500 },
    { year: 3, investment: 5000, cumulative: -5500 },
    { year: 4, investment: 12000, cumulative: 6500 },
    { year: 5, investment: 20000, cumulative: 26500 },
    { year: 10, investment: 40000, cumulative: 150000 },
  ]

  const breakdownData = [
    { name: 'Tuition Fees', value: parseFloat(inputs.tuitionCost) * 100000 },
    { name: 'Living Costs', value: parseFloat(inputs.livingCost) * 100000 },
  ]

  const COLORS = ['#0b7ee5', '#10b981']

  const user = {
    name: 'Anmol',
    email: 'anmol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anmol&background=0b7ee5&color=fff',
  }

  return (
    <DashboardLayout user={user}>
      <div className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section title="ROI Calculator" subtitle="Analyze the financial return on your educational investment">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-1"
              >
                <Card className="p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Investment Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="label mb-2">Tuition Fees (₹ Lakhs)</label>
                      <input
                        type="number"
                        value={inputs.tuitionCost}
                        onChange={(e) => setInputs({...inputs, tuitionCost: e.target.value})}
                        className="w-full px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="label mb-2">Living Costs (₹ Lakhs)</label>
                      <input
                        type="number"
                        value={inputs.livingCost}
                        onChange={(e) => setInputs({...inputs, livingCost: e.target.value})}
                        className="w-full px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:outline-none"
                      />
                    </div>

                    <Divider className="my-4" />

                    <div>
                      <label className="label mb-2">Starting Salary (₹/Year)</label>
                      <input
                        type="number"
                        value={inputs.expectedSalaryStart}
                        onChange={(e) => setInputs({...inputs, expectedSalaryStart: e.target.value})}
                        className="w-full px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="label mb-2">Mid-Career Salary (₹/Year)</label>
                      <input
                        type="number"
                        value={inputs.expectedSalaryMid}
                        onChange={(e) => setInputs({...inputs, expectedSalaryMid: e.target.value})}
                        className="w-full px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="label mb-2">Peak Career Salary (₹/Year)</label>
                      <input
                        type="number"
                        value={inputs.expectedSalaryEnd}
                        onChange={(e) => setInputs({...inputs, expectedSalaryEnd: e.target.value})}
                        className="w-full px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:outline-none"
                      />
                    </div>

                    <Button variant="primary" fullWidth onClick={calculateROI} icon={Calculator} iconPosition="left">
                      Calculate ROI
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Results Section */}
              <div className="lg:col-span-2 space-y-8">
                {/* KPI Cards */}
                {results && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid md:grid-cols-3 gap-4"
                    >
                      <StatCard
                        icon={DollarSign}
                        label="Total Investment"
                        value={`₹${(results.totalInvestment / 100000).toFixed(1)}L`}
                        color="primary"
                      />
                      <StatCard
                        icon={TrendingUp}
                        label="Starting Salary"
                        value={`₹${(results.startingSalary / 100000).toFixed(1)}L`}
                        color="success"
                      />
                      <StatCard
                        icon={Target}
                        label="Breakeven Years"
                        value={`~${results.yearsToBreakEven}`}
                        trend="Estimated"
                        color="primary"
                      />
                    </motion.div>

                    {/* Projection Chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Card className="p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">10-Year Projection</h3>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={projectionData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="year" stroke="#9ca3af" />
                            <YAxis stroke="#9ca3af" />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                              }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="cumulative" stroke="#0b7ee5" strokeWidth={2} name="Cumulative Return" />
                          </LineChart>
                        </ResponsiveContainer>
                      </Card>
                    </motion.div>

                    {/* Cost Breakdown */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      <Card className="p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Cost Breakdown</h3>
                        <ResponsiveContainer width="100%" height={250}>
                          <PieChart>
                            <Pie
                              data={breakdownData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, value }) => `${name}: ₹${(value / 100000).toFixed(1)}L`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {COLORS.map((color, index) => (
                                <Cell key={`cell-${index}`} fill={color} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </Card>

                      <Card className="p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Key Insights</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs font-semibold text-slate-600 mb-1">Monthly Cost</p>
                            <p className="text-2xl font-bold text-slate-900">₹{(results.costPerMonth / 100000).toFixed(2)}L</p>
                          </div>
                          <Divider />
                          <div>
                            <p className="text-sm text-slate-600 mb-2">Your education investment pays back in profit within <strong>{results.yearsToBreakEven} years</strong>.</p>
                            <p className="text-sm text-slate-600">After breakeven, you gain an average of ₹40L+ annually.</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-4"
                    >
                      <Button variant="primary" icon={Download} iconPosition="left" fullWidth>
                        Download Report
                      </Button>
                      <Button variant="secondary" icon={TrendingUp} iconPosition="left" fullWidth>
                        Compare Programs
                      </Button>
                    </motion.div>
                  </>
                )}

                {!results && (
                  <Card className="p-12 text-center">
                    <Calculator size={48} className="text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-600">Fill in your details and click Calculate to see your ROI analysis</p>
                  </Card>
                )}
              </div>
            </div>
          </Section>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ROICalculator
