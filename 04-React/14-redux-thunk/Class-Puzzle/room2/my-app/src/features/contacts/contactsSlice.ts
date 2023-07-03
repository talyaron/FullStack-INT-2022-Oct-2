import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

export interface Contact {
  firstName: string
  lastName: string
  phoneNumber: number
  cellNumber: number
  address: string
  email: string
  _id: string
}

export interface contactsState {
  contacts: Contact[]
  status: "idle" | "loading" | "failed"
}

export const initialState: contactsState = {
  contacts: [],
  status: "idle",
}

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts = [...state.contacts, action.payload]
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      try {
        const index = state.contacts.findIndex(
          (contact) => contact._id === action.payload._id,
        )
        if (index === -1) throw new Error("contact not found")
        state.contacts[index] = action.payload
      } catch (error) {
        console.error(error)
      }
    },
  },
})

export const { addContact, updateContact } = contactSlice.actions

export const selectContacts = (state: RootState) => state.contacts.contacts

export const selectStatus = (state: RootState) => state.contacts.status

export default contactSlice.reducer
