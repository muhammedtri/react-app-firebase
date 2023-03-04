import React, { useRef, useState } from "react"
import { useFirestore } from "../firebase/useFirestore"

const Input = () => {
  const [item, setItem] = useState({ title: "", date: "", type: "" })
  const [amount, setAmount] = useState()
  const selectedOption = useRef()
  const { addItem } = useFirestore()
  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
      type: selectedOption.current.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const actualAmount =
      item.type === "expense" ? -Math.abs(amount) : parseInt(amount)
    await addItem(item, actualAmount)
  }
  return (
    <div className="container mx-auto py-5">
      <form
        className="flex justify-between items-center gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="flex-1 border-2 border-black p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          className="flex-1 border-2 border-black p-3 rounded-lg"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          name="date"
          className="border-2 border-black p-3 rounded-lg"
          onChange={handleChange}
        />
        <label>Type</label>
        <select name="type" onChange={handleChange} ref={selectedOption}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input
          type="submit"
          value="ADD"
          className="bg-amber-500 px-4 py-3 rounded-r-lg font-bold hover:text-white cursor-pointer"
        />
      </form>
    </div>
  )
}

export default Input
