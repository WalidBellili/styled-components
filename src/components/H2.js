import styled from "styled-components"
import { h2Size } from "../styles/fontSize"

const Title = styled.h2`
font-size: ${h2Size};
color: white;

`

const H2 = (props) => {
    // console.log(props);
  return (
    <Title>{props.title}</Title>
  )
}

export default H2