import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, 
  Upload, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Eye, 
  Search,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Download,
  Trash2,
  Lock,
  Zap,
  MoreVertical
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card, Badge, ProgressBar, Divider, Section } from '../../components/ui/premium/index'
import { DashboardLayout } from '../../components/layout/PremiumLayout'

const Documents = () => {
  const [selectedFolder, setSelectedFolder] = useState('All')

  const docs = [
    { id: 1, name: 'Bachelor Transcript', type: 'Academic', status: 'verified', date: 'Oct 10, 2024', size: '2.4 MB', folder: 'Academic' },
    { id: 2, name: 'PAN Card - Aditya', type: 'Identity', status: 'verified', date: 'Oct 12, 2024', size: '1.1 MB', folder: 'Identity' },
    { id: 3, name: 'SOP Draft - Stanford', type: 'Application', status: 'AI Analyzed', date: 'Today, 2:14 PM', size: '0.8 MB', folder: 'Application' },
    { id: 4, name: 'GRE Official Score', type: 'Test Scores', status: 'verified', date: 'Oct 14, 2024', size: '1.5 MB', folder: 'Academic' },
    { id: 5, name: 'ITR - Co-applicant', type: 'Financial', status: 'Missing', date: '-', size: '-', folder: 'Financial' },
  ]

  const folders = ['All', 'Academic', 'Identity', 'Financial', 'Application']

  const user = {
    name: 'Anmol',
    email: 'anmol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anmol&background=0b7ee5&color=fff',
  }

  return (
    <DashboardLayout user={user}>
      <div className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Smart Document Vault</h1>
              <p className="text-slate-500 font-medium tracking-tight">AI-powered document extraction and verified secure storage.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" icon={ShieldCheck}>Security Audit</Button>
              <Button variant="primary" icon={Upload} iconPosition="left">Upload Document</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Folder Navigation - Left */}
            <div className="lg:col-span-1 space-y-2">
               {folders.map(folder => (
                 <button 
                  key={folder}
                  onClick={() => setSelectedFolder(folder)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all ${
                    selectedFolder === folder ? 'bg-primary-600 text-white shadow-lg shadow-primary-100' : 'bg-white text-slate-500 hover:bg-slate-50'
                  }`}
                 >
                   <span className="text-sm">{folder}</span>
                   <Badge variant={selectedFolder === folder ? 'primary' : 'slate'} size="xs" className={selectedFolder === folder ? 'bg-white/20 text-white border-0' : ''}>
                     {folder === 'All' ? docs.length : docs.filter(d => d.folder === folder).length}
                   </Badge>
                 </button>
               ))}

               <div className="pt-8 space-y-6">
                 <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-600/20 rounded-full blur-2xl"></div>
                    <Lock size={20} className="text-primary-400 mb-4" />
                    <h4 className="text-sm font-bold mb-2">Vault Storage</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-400">24.5 / 100 MB used</span>
                    </div>
                    <ProgressBar value={24.5} color="primary" size="sm" />
                 </Card>

                 <Card className="p-6 border-primary-200 bg-primary-50">
                    <div className="flex items-center gap-2 text-primary-600 mb-3">
                      <Zap size={18} />
                      <h4 className="text-sm font-bold">AI Autofill</h4>
                    </div>
                    <p className="text-[11px] font-medium text-primary-700 leading-relaxed">
                      Our AI has extracted 14 fields from your transcript. Application forms will be pre-filled automatically.
                    </p>
                 </Card>
               </div>
            </div>

            {/* Document List - Center/Right */}
            <div className="lg:col-span-3 space-y-6">
               <Card className="p-0 border-slate-200 overflow-hidden">
                 <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div className="relative w-full max-w-sm">
                      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Search your vault..." 
                        className="w-full pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:ring-4 focus:ring-primary-50 transition-all"
                      />
                    </div>
                    <div className="flex gap-2">
                       <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-600 transition-colors"><MoreVertical size={18} /></button>
                    </div>
                 </div>

                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/30">
                          <th className="px-8 py-4">Document Name</th>
                          <th className="px-8 py-4 text-center">Size</th>
                          <th className="px-8 py-4">Status</th>
                          <th className="px-8 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {docs.filter(d => selectedFolder === 'All' || d.folder === selectedFolder).map(doc => (
                          <motion.tr 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={doc.id} 
                            className="group hover:bg-slate-50 transition-colors"
                          >
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                  doc.status === 'Missing' ? 'bg-slate-100 text-slate-400' : 'bg-primary-50 text-primary-600'
                                }`}>
                                  <FileText size={24} />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-slate-900">{doc.name}</p>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{doc.type}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6 text-center text-[11px] font-bold text-slate-400">{doc.size}</td>
                            <td className="px-8 py-6">
                              {doc.status === 'verified' && (
                                <div className="flex items-center gap-2 text-green-600">
                                  <ShieldCheck size={16} />
                                  <span className="text-[11px] font-black uppercase tracking-wider">Verified</span>
                                </div>
                              )}
                              {doc.status === 'AI Analyzed' && (
                                <div className="flex items-center gap-2 text-blue-600">
                                  <Sparkles size={16} />
                                  <span className="text-[11px] font-black uppercase tracking-wider">AI Scanned</span>
                                </div>
                              )}
                              {doc.status === 'Missing' && (
                                <div className="flex items-center gap-2 text-orange-500">
                                  <AlertCircle size={16} />
                                  <span className="text-[11px] font-black uppercase tracking-wider">Required</span>
                                </div>
                              )}
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors"><Eye size={18} /></button>
                                <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors"><Download size={18} /></button>
                                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                 </div>
               </Card>

               {/* AI Document Insights */}
               <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6 bg-emerald-50 border-emerald-100">
                    <div className="flex items-center gap-3 mb-4 text-emerald-600">
                      <CheckCircle2 size={24} />
                      <h3 className="font-bold text-slate-900">Loan Readiness</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-600 mb-6 leading-relaxed">
                      You have 4 of 6 primary documents ready for your MIT loan application. Upload your Co-applicant's ITR to reach 100%.
                    </p>
                    <ProgressBar value={66} color="success" size="md" />
                  </Card>

                  <Card className="p-6 bg-blue-50 border-blue-100">
                    <div className="flex items-center gap-3 mb-4 text-blue-600">
                      <Sparkles size={24} />
                      <h3 className="font-bold text-slate-900">SOP Intelligence</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-600 mb-6 leading-relaxed">
                      Your Stanford SOP draft looks strong. AI suggests focusing more on your "Distributed Systems" projects to align with faculty interests.
                    </p>
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-black text-blue-600 uppercase">AI Strength Score</span>
                       <span className="text-sm font-black text-blue-900">88%</span>
                    </div>
                  </Card>
               </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Documents
