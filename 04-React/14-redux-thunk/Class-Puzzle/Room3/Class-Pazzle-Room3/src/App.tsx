import React, { useEffect } from "react"
import HomePage from "./pages/HomePage"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getUsersAsync } from "./features/user/userAPI"
import { selectUsers } from "./features/user/userSlice"

const App = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  useEffect(() => {
    dispatch(getUsersAsync())
  }, [])

useEffect(() =>{
console.log(users);
}, [users]);
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  )
}

export default App
