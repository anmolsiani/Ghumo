"use client"

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (res?.error) {
      setError('Invalid credentials')
    } else {
      router.push('/admin')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-secondary)] px-6">
      <div className="glass p-12 rounded-[3rem] w-full max-w-md space-y-8 bg-white/70">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black italic">Admin <span className="text-[var(--accent-earth)]">Portal</span></h1>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Secure Access Only</p>
        </div>

        {error && <p className="text-red-500 text-center text-sm font-bold">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
             <label className="text-[10px] font-bold uppercase tracking-widest px-4">Email</label>
             <input 
               type="email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--accent-earth)]/20 transition-all font-medium" 
             />
          </div>
          <div className="space-y-2">
             <label className="text-[10px] font-bold uppercase tracking-widest px-4">Password</label>
             <input 
               type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--accent-earth)]/20 transition-all font-medium" 
             />
          </div>
          <Button type="submit" variant="primary" className="w-full !rounded-2xl py-6">Authorize</Button>
        </form>
      </div>
    </div>
  )
}
