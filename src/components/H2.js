import styled from "styled-components"

const Title = styled.h2`
font-size: 30px;
color: black;

`

const H2 = (props) => {
    // console.log(props);
  return (
    <Title>{props.title}</Title>
  )
}

export default H2