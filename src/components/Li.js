import styled from "styled-components"
import { colorParapgraph } from "../styles/colors"
import { minimal } from "../styles/fontSize"

const List = styled.li`
font-size: ${minimal};
color: ${colorParapgraph };

`

const Li = (props) => {
    // console.log(props);
  return (
    <List>{props.list}</List>
  )
}

export default Li