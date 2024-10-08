import { useState } from "react"
import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Goku',
    email: 'goku@kamehouse.com'
}

export const UserProvider = ({ children }) => {

const [user, setUser] = useState()

  return (
    // <UserContext.Provider value={{hola:'mundo',user}}>
    <UserContext.Provider value={{ user, setUser }}>

        {children}
    </UserContext.Provider>
  )
}
