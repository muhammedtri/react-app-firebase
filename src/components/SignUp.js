import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import React, { useRef, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { CustomAlert } from "./CustomAlert"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userCreated, setUserCreated] = useState("")
  const navigate = useNavigate()
  const passRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        setUserCreated("auth/User Created Succesfully")
      })
      .catch((error) => {
        const errorCode = error.code
        // ..
      })
  }
  const handlePass = () => {
    if (password !== confirmPassword) {
      passRef.current.style.display = "block"
    } else {
      passRef.current.style.display = "none"
    }
  }
  if (userCreated !== "") {
    return (
      <>
        <CustomAlert color="green" message={userCreated} />
        {setTimeout(() => {
          navigate("/")
        }, 3000)}
      </>
    )
  }
  return (
    <div className="w-80 p-3 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Enter your Email"
          className="p-2 border-2 border-amber-500 rounded-lg mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="p-2 border-2 border-amber-500 rounded-lg mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm your Password"
          className="p-2 border-2 border-amber-500 rounded-lg mb-3"
          onChange={(e) => setConfirmPassword(e.target.value)}
          onKeyUp={handlePass}
        />
        <span ref={passRef} className="text-red-500 text-center hidden mb-3">
          Password not matches
        </span>
        <button
          type="submit"
          className="bg-amber-500 p-3 rounded-lg text-xl font-bold hover:text-white hover:bg-amber-600 transition-all"
        >
          SIGN UP
        </button>
      </form>
    </div>
  )
}

export default SignUp
