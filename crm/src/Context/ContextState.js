import React from 'react'
import Context from './Context'

const ContextState = (props) => {
  const value={
    name:"Jay",
    Age:15
  }
  return (
    <Context.Provider value={value}>
       {props.children}
    </Context.Provider>
  )
}
export default ContextState