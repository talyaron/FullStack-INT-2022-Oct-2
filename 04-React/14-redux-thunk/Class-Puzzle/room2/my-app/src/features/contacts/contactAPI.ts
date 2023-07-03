import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchContacts = async () => {
  const data = await axios.get("http://localhost:3000/contact/allContacts")
  const { contacts } = data.data
  return contacts
}

export const getAllContacts = createAsyncThunk(
  "http://localhost:3000/contact/allContacts",
  async () => {
    return await fetchContacts()
  },
)
