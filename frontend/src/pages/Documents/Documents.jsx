import React from 'react'
import { FileText, Upload, CheckCircle2, Clock, AlertCircle, Eye, Search } from 'lucide-react'
import '../../styles/Documents.css'

const initialDocs = [
  { id: 1, name: 'Bachelor Degree Transcript', type: 'Academic', status: 'verified', date: 'Oct 10, 2024' },
  { id: 2, name: 'Aditya Pan Card', type: 'Identification', status: 'under_review', date: 'Oct 12, 2024' },
]

const Documents = () => {
  return (
    <div className="docs-container">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-black text-slate-900">Document Vault</h1>
          <button className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-primary-100 flex items-center gap-3">
            <Upload size={20} /> Upload New
          </button>
        </div>

        <div className="docs-table-card">
          <table className="w-full text-left">
            <thead className="table-header">
              <tr>
                <th className="px-8 py-5">Name</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {initialDocs.map(doc => (
                <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-700">{doc.name}</td>
                  <td className="px-8 py-6"><StatusBadge status={doc.status} /></td>
                  <td className="px-8 py-6 text-slate-400 font-bold">{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const StatusBadge = ({ status }) => (
  <span className={`status-label ${status === 'verified' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
    {status.replace('_', ' ')}
  </span>
)

export default Documents
