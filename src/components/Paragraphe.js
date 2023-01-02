import styled from "styled-components"
import { colorParapgraph } from "../styles/colors"
import { medium } from "../styles/fontSize"

const Text = styled.p`
font-size: ${medium };
color: ${colorParapgraph };

`

const Paragraphe = (props) => {
  return (
    <Text>{props.text}</Text>
  )
}

export default Paragraphe