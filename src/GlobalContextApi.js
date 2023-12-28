import React from 'react'
import { createContext } from 'react'
// import React from 'react'

export let GlobalContext = createContext()

const GlobalContextApi = ({children}) => {
  return (
    <GlobalContext.Provider value={{message:"hello", age:"23"}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextApi
