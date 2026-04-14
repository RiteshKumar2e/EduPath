import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Send, User, Sparkles, Plus } from 'lucide-react'
import '../../styles/ChatMentor.css'

const ChatMentor = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I'm your EduPath AI Mentor. How can I help you today?" }
  ])
  const [input, setInput] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages(prev => [...prev, { role: 'user', text: input }])
    setInput('')
  }

  return (
    <div className="chat-container">
      <div className="chat-box-main">
        <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <BrainCircuit size={28} />
            </div>
            <h2 className="text-2xl font-black text-slate-800">AI Mentor</h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-8">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div className={`message-bubble ${msg.role === 'user' ? 'message-user' : 'message-ai'}`}>
                 {msg.text}
               </div>
            </div>
          ))}
        </div>

        <div className="p-10 border-t border-slate-100">
           <form onSubmit={handleSend} className="relative">
             <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Ask AI anything..." className="w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-[32px] font-bold text-slate-800 focus:outline-none" />
             <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-primary-600 text-white rounded-2xl shadow-xl">
               <Send size={20} />
             </button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default ChatMentor
