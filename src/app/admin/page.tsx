import React from 'react'
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import dbConnect from '@/lib/mongodb'
import Package from '@/models/Package'

export default async function AdminDashboard() {
  const session = await getServerSession()
  if (!session) {
    redirect('/admin/login')
  }

  await dbConnect()
  const packages = await Package.find({}).sort({ createdAt: -1 }).limit(10)
  const totalPackages = await Package.countDocuments()

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-20 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
             <h1 className="text-5xl font-black italic tracking-tighter">Admin <span className="text-[var(--accent-earth)]">Dashboard</span></h1>
             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Site Oversight & Controls</p>
          </div>
          <div className="glass px-8 py-4 rounded-2xl flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-bold">●</div>
             <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">System Status</p>
                <p className="text-sm font-black">All Systems Functional</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="glass p-10 rounded-[3rem] space-y-2">
              <p className="text-[var(--text-muted)] font-bold text-xs uppercase tracking-widest">Total Packages</p>
              <p className="text-6xl font-black">{totalPackages}</p>
           </div>
           <div className="glass p-10 rounded-[4rem] space-y-2 bg-[var(--accent-earth)]/10 border-none">
              <p className="text-[var(--accent-earth)] font-bold text-xs uppercase tracking-widest">Total Inquiries</p>
              <p className="text-6xl font-black">0</p>
           </div>
           <div className="glass p-10 rounded-[3rem] space-y-2">
              <p className="text-[var(--text-muted)] font-bold text-xs uppercase tracking-widest">Revenue (MTD)</p>
              <p className="text-6xl font-black italic">₹0</p>
           </div>
        </div>

        <div className="glass p-12 rounded-[4rem] overflow-hidden">
           <h2 className="text-2xl font-black mb-8">Recent Packages</h2>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead className="border-b border-black/5">
                 <tr>
                   <th className="pb-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Package Title</th>
                   <th className="pb-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">State</th>
                   <th className="pb-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Price</th>
                   <th className="pb-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] text-right">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-black/5">
                 {packages.map((pkg) => (
                   <tr key={pkg._id.toString()}>
                     <td className="py-6 font-bold">{pkg.title}</td>
                     <td className="py-6 uppercase text-xs tracking-widest opacity-60">{pkg.state}</td>
                     <td className="py-6 font-black text-[var(--accent-teal)]">₹{pkg.price.toLocaleString()}</td>
                     <td className="py-6 text-right">
                       <button className="text-xs font-bold uppercase tracking-widest hover:text-[var(--accent-earth)] transition-colors">Edit</button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  )
}
