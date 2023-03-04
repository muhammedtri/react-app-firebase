import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Protected from "./components/Protected"
import SignUp from "./components/SignUp"
import Home from "./Pages/Home"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route element={<Protected isLoggedIn={isLoggedIn} />}>
          <Route element={<Home />} path="/home" />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
