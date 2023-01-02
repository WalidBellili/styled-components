import styled from "styled-components"

const SpanText = styled.span`
margin: 10px;
`

const Span = (props) => {
  return (
    <SpanText >{props.text}</SpanText>
  )
}

export default Span