import React from "react"
import { useFirestore } from "../firebase/useFirestore"
import Item from "./Item"

const ItemList = () => {
  const { items } = useFirestore()
  return (
    <div className="container mx-auto py-5">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList
