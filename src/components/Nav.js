import React from 'react'
import Buttons from './Buttons'
import Li from './Li'

const nav = () => {
  return (
    
        <nav>
        <i>ICONE</i>
        <ul>
            <Li text="About"/>
            <Li text="Experience"/>
            <Li text="Work"/>
            <Li text="Contact"/>
        </ul>
        <Buttons text="Resume"/>
    </nav>
    
  )
}

export default nav