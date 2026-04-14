import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  RefreshCw,
  Settings,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Share2,
  Plus,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Banknote,
  Search,
  User,
  Robot as RobotIcon,
  Bot
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card, Badge, Divider, Section } from '../../components/ui/premium/index'
import { DashboardLayout } from '../../components/layout/PremiumLayout'

const ChatMentor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI Education Mentor. I can help you discover universities, estimate your admission chances, or even calculate the ROI of your master\'s degree. What\'s on your mind today?',
      actions: [
        { label: 'Check Loan Eligibility', icon: <Banknote size={14} />, link: '/loans' },
        { label: 'Navigate Careers', icon: <TrendingUp size={14} />, link: '/navigator' }
      ],
      timestamp: new Date(Date.now() - 5 * 60000),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const suggestedQuestions = [
    'How do I improve my admission chances for Stanford?',
    'What are the best universities for AI in Germany?',
    'Show me loan options for ₹50L budget.',
    'I need help with my SOP structure.'
  ]

  const handleSend = (text = input) => {
    const messageContent = typeof text === 'string' ? text : input
    if (!messageContent.trim()) return
    
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageContent,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate AI response based on keywords
    setTimeout(() => {
      let aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: "I've analyzed your profile and the universities you're targeting. For a person with your background, I'd recommend focusing on your Quantitative GRE score to boost your chances at Tier-1 colleges by 15%. Shall we check your updated ROI if you target these colleges?",
        actions: [
          { label: 'Calculate ROI', icon: <TrendingUp size={14} />, link: '/roi' },
          { label: 'View Shortlist', icon: <Plus size={14} />, link: '/navigator' }
        ],
        timestamp: new Date(),
      }

      if (messageContent.toLowerCase().includes('loan') || messageContent.toLowerCase().includes('money')) {
        aiResponse.content = "Based on current NBFC rates and your profile strength, you are eligible for up to ₹52L with zero collateral. Would you like to see a detailed EMI breakdown?"
        aiResponse.actions = [{ label: 'Go to Financing Hub', icon: <Banknote size={14} />, link: '/loans' }]
      }

      setMessages(prev => [...prev, aiResponse])
      setLoading(false)
    }, 1500)
  }

  const user = {
    name: 'Anmol',
    email: 'anmol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anmol&background=0b7ee5&color=fff',
  }

  return (
    <DashboardLayout user={user}>
      <div className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">AI Education Mentor</h1>
              <p className="text-slate-500 font-medium">Your 24/7 personal guide for global education.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} className="w-full h-full rounded-full" alt="User" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400 ml-2">842 students active</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Chat Area */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <Card className="p-0 border-slate-200 flex flex-col h-[650px] shadow-xl shadow-slate-200/50 overflow-hidden bg-white">
                {/* Chat Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-200 ring-4 ring-primary-50">
                      <Bot size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 leading-none">EduBot Agent</h3>
                      <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest mt-1.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors"><RefreshCw size={18} /></button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors"><Settings size={18} /></button>
                  </div>
                </div>

                {/* Messages List */}
                <div ref={scrollRef} className="flex-1 p-6 space-y-8 overflow-y-auto scroll-smooth bg-gradient-to-b from-white to-slate-50/30">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-4 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                          msg.type === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-primary-100 text-primary-600'
                        }`}>
                          {msg.type === 'user' ? <User size={16} /> : <Sparkles size={16} />}
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className={`px-5 py-4 rounded-3xl shadow-sm leading-relaxed ${
                            msg.type === 'user'
                              ? 'bg-slate-900 text-white rounded-tr-none'
                              : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
                          }`}>
                            <p className="text-sm font-medium">{msg.content}</p>
                            <p className={`text-[10px] mt-2 font-bold ${msg.type === 'user' ? 'text-slate-400' : 'text-slate-400'}`}>
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                          
                          {msg.actions && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {msg.actions.map((action, i) => (
                                <button
                                  key={i}
                                  className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-2xl text-xs font-black border border-primary-100 hover:bg-primary-100 transition-all hover:-translate-y-0.5"
                                >
                                  {action.icon}
                                  {action.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="flex gap-4 max-w-[85%]">
                        <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                          <Bot size={16} />
                        </div>
                        <div className="bg-white border border-slate-100 px-5 py-4 rounded-3xl rounded-tl-none flex gap-1.5 items-center">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-white border-t border-slate-100">
                  <div className="relative flex items-center gap-2">
                    <div className="flex-1 relative">
                       <input
                        type="text"
                        placeholder="Type your question here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        className="w-full pl-6 pr-14 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-primary-600 focus:bg-white focus:outline-none transition-all font-medium text-slate-900"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors">
                          <Plus size={20} />
                        </button>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      className="h-[56px] w-[56px] rounded-2xl flex items-center justify-center p-0 shadow-lg shadow-primary-200"
                      icon={Send}
                      onClick={() => handleSend()}
                      disabled={!input.trim() || loading}
                    />
                  </div>
                </div>
              </Card>
              
              {/* Suggestion Chips */}
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-primary-400 hover:text-primary-600 transition-all shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Learning Path</h3>
                <div className="space-y-4">
                   {[
                    { title: 'Profile Setup', icon: <User size={16} />, status: 'Done' },
                    { title: 'Career Discovery', icon: <TrendingUp size={16} />, status: 'Next' },
                    { title: 'Financing', icon: <Banknote size={16} />, status: 'Later' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                       <div className="flex items-center gap-3">
                         <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                           item.status === 'Done' ? 'bg-green-100 text-green-600' : 'bg-white text-slate-400'
                         }`}>
                           {item.icon}
                         </div>
                         <span className="text-xs font-bold text-slate-700">{item.title}</span>
                       </div>
                       <Badge variant={item.status === 'Done' ? 'success' : item.status === 'Next' ? 'primary' : 'slate'} size="xs">
                         {item.status}
                       </Badge>
                     </div>
                   ))}
                </div>
                <Button variant="secondary" fullWidth className="mt-6" size="sm">View Full Journey</Button>
              </Card>

              <Card className="p-6 bg-slate-900 text-white border-0 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary-600/30 rounded-full blur-2xl"></div>
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Quick ROI</h3>
                <div className="mb-6">
                  <p className="text-[10px] text-slate-400 font-bold mb-1">Expected ROI at Stanford</p>
                  <p className="text-2xl font-black text-primary-400">14.2% Annual</p>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-t border-white/10 pt-4">
                  <span>Payback Period</span>
                  <span className="text-white">3.4 Years</span>
                </div>
              </Card>

              {/* Chat Support Info */}
              <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={20} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Knowledge Base</h4>
                <p className="text-xs text-slate-500 font-medium mb-4 leading-relaxed">Search through thousands of student FAQs and university brochures.</p>
                <div className="relative">
                   <input 
                    type="text" 
                    placeholder="Search FAQs..." 
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-slate-100 border-none text-xs font-medium focus:ring-2 focus:ring-primary-100"
                  />
                  <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ChatMentor
