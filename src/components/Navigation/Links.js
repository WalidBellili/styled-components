import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { minimal } from '../../styles/fontSize';

const Ancre = styled.a`
text-decoration: none;
font-size: ${minimal};
color:white;
`


const Links = () => {
  return (
    <>
  <Ancre href='#'>01. About</Ancre>
  <Ancre href='#'>02. Experience</Ancre>
  <Ancre href='#'>03. Work</Ancre>
  <Ancre href='#'>04. Contact</Ancre>
 
    
    </>
  )
}

export default Links