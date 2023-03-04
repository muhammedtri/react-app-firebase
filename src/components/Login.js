import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CustomAlert } from "./CustomAlert"

const Login = ({ setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [error, setError] = useState("")
  const [password, setPassword] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        setIsLoggedIn(true)
        navigate("/home")
        // return <Protected isLoggedIn={isLoggedIn} />
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        // const errorMessage = error.message
        setError(errorCode)
      })
  }
  if (error !== "") {
    return <CustomAlert message={error} color="red" />
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
        <button
          type="submit"
          className="bg-amber-500 p-3 rounded-lg text-xl font-bold hover:text-white hover:bg-amber-600 transition-all"
        >
          SIGN IN
        </button>
        <div className="my-3 text-center">
          Looking to{" "}
          <Link to="/signup" className="text-blue-600">
            Create an account
          </Link>{" "}
          ?
        </div>
      </form>
    </div>
  )
}

export default Login
