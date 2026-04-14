import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card, InputField, Badge, Section, Divider } from '../../components/ui/premium/index'
import { DashboardLayout } from '../../components/layout/PremiumLayout'

const ChatMentor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI mentor. I\'m here to answer any questions about universities, applications, admissions, financing, and your career path. What would you like to know?',
      timestamp: new Date(Date.now() - 5 * 60000),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const suggestedQuestions = [
    'What universities match my profile?',
    'How do I improve my admission chances?',
    'What loan options are available?',
    'How do I prepare for the GRE?',
  ]

  const handleSend = () => {
    if (!input.trim()) return
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: 'This is a simulated response. In production, this would call your AI backend. Your question was: "' + input + '". I\'m here to help with any education-related queries!',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiMessage])
      setLoading(false)
    }, 1000)
  }

  const user = {
    name: 'Anmol',
    email: 'anmol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anmol&background=0b7ee5&color=fff',
  }

  return (
    <DashboardLayout user={user}>
      <div className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section title="AI Mentor Chat" subtitle="24/7 guidance for your educational journey">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Chat Area */}
              <div className="lg:col-span-3">
                <Card className="p-0 flex flex-col h-[600px]">
                  {/* Messages */}
                  <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    {messages.length === 0 ? (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <MessageSquare size={48} className="text-slate-300 mx-auto mb-4" />
                          <p className="text-slate-600">Start a conversation with your AI mentor</p>
                        </div>
                      </div>
                    ) : (
                      messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                              msg.type === 'user'
                                ? 'bg-primary-600 text-white rounded-br-none'
                                : 'bg-slate-100 text-slate-900 rounded-bl-none'
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                            <p className={`text-xs mt-2 ${msg.type === 'user' ? 'text-primary-100' : 'text-slate-500'}`}>
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </motion.div>
                      ))
                    )}
                    {loading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-slate-100 text-slate-900 px-4 py-3 rounded-lg rounded-bl-none">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" />
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-100" />
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-200" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <Divider className="my-0" />

                  {/* Input Area */}
                  <div className="p-4 bg-white">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ask me anything..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        className="flex-1 px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:outline-none text-sm"
                      />
                      <Button
                        variant="primary"
                        size="md"
                        icon={Send}
                        onClick={handleSend}
                        disabled={!input.trim() || loading}
                      />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Quick Questions */}
                <Section title="Suggestions">
                  <div className="space-y-2">
                    {suggestedQuestions.map((q, i) => (
                      <Card
                        key={i}
                        className="p-3 cursor-pointer hover:bg-primary-50 transition-colors"
                        onClick={() => {
                          setInput(q)
                        }}
                      >
                        <p className="text-sm font-medium text-slate-900 line-clamp-2">{q}</p>
                      </Card>
                    ))}
                  </div>
                </Section>

                {/* Chat History */}
                <Section title="Recent Chats">
                  <div className="space-y-2">
                    <Card className="p-3">
                      <p className="text-sm font-medium text-slate-900">Universities in UK</p>
                      <p className="text-xs text-slate-500 mt-1">Today</p>
                    </Card>
                    <Card className="p-3">
                      <p className="text-sm font-medium text-slate-900">Loan Eligibility</p>
                      <p className="text-xs text-slate-500 mt-1">Yesterday</p>
                    </Card>
                  </div>
                </Section>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ChatMentor
