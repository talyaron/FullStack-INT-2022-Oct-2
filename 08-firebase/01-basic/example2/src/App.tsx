import { useState, useEffect } from 'react'

import './App.css'
import { addUserToDB } from './controlers/users'
import { collection, onSnapshot } from 'firebase/firestore'
import { DB } from './config'


function App() {
  const [name, setName] = useState<string>('')
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    // (async ()=>{
    //   const _users = await getUsersFromDB();
    //   setUsers(_users);
    //   console.log(_users);
    // })()

    const usersRef = collection(DB, 'users')

    const unsubscribe = onSnapshot(usersRef, (usersDB) => {
      const _users2: any[] = [];
      usersDB.forEach((userDB: any) => {
        _users2.push(userDB.data())
      })
      setUsers(_users2);
    })
    
    return () => {
      unsubscribe();
    }

  }, [])
  function handleAddUser() {
    if (name)
      addUserToDB(name);

    setName('');
  }

  function handleSetName(e: any) {
    setName(e.target.value)
  }
  return (

    <>
      <div className="App">
        <input type="text" placeholder='name' onKeyUp={handleSetName} defaultValue={name} />
        <button onClick={handleAddUser}>ADD User</button>
      </div>
      {users.map((user: any) => <p key={user.id}>{user.first}</p>)}
    </>
  )
}

export default App
