import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const UserContext = createContext()

// This component establishes what data can be used.
export const UserStoredProvider = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    
    return fetch("http://localhost:8088/users")
      .then(response => response.json())
      .then(usersData => setUsers(usersData))
  }
  
  /*
      You return a context provider which has the
      `users` state, `getusers` function,
      and the `adduser` function as keys. This
      allows any child elements to access them.
  */
  return (
    <UserContext.Provider value={{
      users: users, 
      getUsers: getUsers
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
