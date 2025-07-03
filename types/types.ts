// types/types.ts

// 📦 A single fixed charge (e.g., Rent, Phone)
export type Charge = {
    id: string
    label: string
    amount: number
  }
  
  // 🎯 A budget allocation (e.g., Travel, Savings)
  export type Allocation = {
    id: string
    label: string
    type: 'percent' | 'amount'
    value: number
  }
  
  // 📊 Summary of a given month
  export type Summary = {
    totalCharges: number
    totalAllocations: number
    remaining: number
  }
  
  // 📅 Data structure for one month
  export type MonthData = {
    id: string
    month: string // Format: "2025-07"
    income: number
    charges: Charge[]
    allocations: Allocation[]
    createdAt: string
  }
  
  // ⚙️ User config saved in localStorage or database
  export type UserPreferences = {
    defaultInput: 'percent' | 'amount'
    currency: 'EUR' | 'USD'
    rounding: 0 | 1 | 2
    darkMode: boolean
    visibleWidgets: string[] // e.g., ['income', 'charges', 'chart']
  }
  