import React from "react"
import { useFirestore } from "../firebase/useFirestore"

const Header = () => {
  const { totalBudget } = useFirestore()
  return (
    <div className="bg-amber-500">
      <div className="container mx-auto py-3 flex justify-between">
        <h1 className="font-bold text-3xl">Budget Tracker</h1>
        <h1 className="text-3xl bg-black text-white rounded-md px-2">
          $ <span>{totalBudget}</span>
        </h1>
      </div>
    </div>
  )
}

export default Header
