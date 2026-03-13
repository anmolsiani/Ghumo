"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  title: string
  price: number
  state: string
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  total: number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => {
        if (state.items.find(i => i.id === item.id)) return state
        const newItems = [...state.items, item]
        return {
          items: newItems,
          total: newItems.reduce((acc, i) => acc + i.price, 0)
        }
      }),
      removeItem: (id) => set((state) => {
        const newItems = state.items.filter(i => i.id !== id)
        return {
          items: newItems,
          total: newItems.reduce((acc, i) => acc + i.price, 0)
        }
      }),
      clearCart: () => set({ items: [], total: 0 }),
      total: 0
    }),
    {
      name: 'ghumo-cart-storage'
    }
  )
)
