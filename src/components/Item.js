import React from "react"
import { useFirestore } from "../firebase/useFirestore"

const Item = ({ item }) => {
  const { deleteItem } = useFirestore()
  return (
    <div className="flex justify-between py-3 px-2 border-b-2 border-black">
      <h1 className="flex-1">{item.title}</h1>
      <h1
        className={
          item.amount < 0 ? "flex-1 text-red-500" : " flex-1 text-green-700"
        }
      >
        $ {item.amount < 0 ? Math.abs(item.amount) : item.amount}
      </h1>
      <h1 className="flex-1">{item.date}</h1>
      <h1
        className={
          item.type === "expense"
            ? "flex-1 text-red-500 font-bold"
            : "flex-1 text-green-700 font-bold"
        }
      >
        {item.type}
      </h1>
      <button
        onClick={() => deleteItem(item.id)}
        className="px-3 py-2 bg-amber-500 font-bold rounded-lg hover:text-amber-500 hover:bg-black transition-all"
      >
        Delete
      </button>
    </div>
  )
}

export default Item
