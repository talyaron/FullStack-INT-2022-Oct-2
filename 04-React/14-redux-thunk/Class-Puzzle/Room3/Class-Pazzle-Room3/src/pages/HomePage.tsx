import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import "./HomePage.scss"
import { useAppDispatch } from "../app/hooks"
import { selectUsers } from "../features/user/userSlice"
import { createUser } from "../features/user/userSlice"

interface User {
  _id: string
  name: string
  age: number
  url: string
}

const HomePage = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [namesLists, setNamesLists] = useState<User[]>([])

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      dispatch(createUser({ name, age, url: "", _id: "" }))
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="HomePage">
      <h1 className="HomePageTitle">Home Page</h1>
      <form className="HomePageForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="HomePageInput"
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="HomePageInput"
          />
        </div>
        <button type="submit" className="HomePageButton">
          Add
        </button>
      </form>
      <div className="NamesList">
        <h2>Previously Added Names:</h2>
        <ul>
          {namesLists.map((namesList, _id) => (
            <div key={namesList._id}>
              <h2 key={namesList._id}>{namesList.name}</h2>
              <img src={namesList.url} key={namesList._id} />
              <p key={namesList._id}>{namesList.age}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
