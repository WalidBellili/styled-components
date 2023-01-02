import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Ancre = styled.a`
text-decoration: none;
color:wheat
`


const Links = () => {
  return (
    <>
  <Ancre href='#'>About</Ancre>
  <Ancre href='#'>Experience</Ancre>
  <Ancre href='#'>Work</Ancre>
  <Ancre href='#'>Contact</Ancre>
 
    
    </>
  )
}

export default Links