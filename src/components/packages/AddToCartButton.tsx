"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cartStore'
import { Check } from 'lucide-react'

interface AddToCartButtonProps {
  packageData: {
    id: string
    title: string
    price: number
    state: string
    image: string
  }
}

export function AddToCartButton({ packageData }: AddToCartButtonProps) {
  const [mounted, setMounted] = useState(false)
  const { addItem, items } = useCartStore()
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <Button variant="secondary" className="w-full !rounded-2xl" disabled>Loading...</Button>

  const isAlreadyInCart = items.some(item => item.id === packageData.id)

  const handleAdd = () => {
    if (isAlreadyInCart) return
    addItem(packageData)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (isAlreadyInCart) {
    return (
      <Button variant="secondary" className="w-full !rounded-2xl" disabled>
        Already in Cart
      </Button>
    )
  }

  return (
    <Button 
      variant="primary" 
      magnetic 
      className={`w-full !rounded-2xl flex items-center justify-center gap-2 ${added ? '!bg-green-500 !text-white !border-green-500' : ''}`}
      onClick={handleAdd}
    >
      {added ? <><Check className="w-4 h-4" /> Added successfully</> : "Add to Cart"}
    </Button>
  )
}
