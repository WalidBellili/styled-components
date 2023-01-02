import styled from "styled-components"

const Text = styled.p`
font-size: 20px;
color: black;

`

const Paragraphe = (props) => {
  return (
    <Text>{props.text}</Text>
  )
}

export default Paragraphe