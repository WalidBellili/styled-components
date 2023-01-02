import Header from "./components/Header"
import styled from 'styled-components'
import { blue } from "./styles/color"

const MainContainer = styled.body`
height : 100%;
width : 100%;
background-color : ${blue};
`

const App = () => {
  return (
    <MainContainer>
      <Header/>

    </MainContainer>

  )
}

export default App