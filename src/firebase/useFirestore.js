import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./firebase"

export const useFirestore = () => {
  const [items, setItems] = useState([])

  const fetchData = async () => {
    const q = query(collection(db, "items"), orderBy("date"))
    await onSnapshot(q, (querySnapshot) => {
      let data = []
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      setItems(data)
    })
    // await onSnapshot(collection(db, "items"), orderBy("title"), (snapshot) => {
    //   let data = []
    //   snapshot.docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }))
    //   setItems(data)
    // })
  }
  useEffect(() => {
    fetchData()
  }, [])

  const addItem = async (item, amount) => {
    await addDoc(collection(db, "items"), {
      ...item,
      amount,
    })
  }

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id))
  }
  const totalBudget = items.reduce((curr, acc) => curr + acc.amount, 0)
  return { items, addItem, deleteItem, totalBudget }
}
