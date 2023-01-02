import React from 'react'
import styled from 'styled-components'
import Span from '../Span'

const Article = styled.article`
display: flex;
flex-direction: column;
padding-top: 2%;
margin: 5px;
color: white;
`

const BtnSelect = () => {
  return (
    <Article>
    <Span text="Upstatement"/>
    <Span text="Scout"/>
    <Span text="Apple"/>
    <Span text="Scout"/>
    <Span text="Starry"/>
    <Span text="MullenLowe"/>
    </Article>
  )
}

export default BtnSelect