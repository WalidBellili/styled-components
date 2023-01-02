
import AboutMe from './components/AboutMe/AboutMe'
// import styled from 'styled-components'
import './components/App.css'
import GlobalStyle from './components/Global'
import Header from './components/Navigation/Header'
import WorkedIndex from './components/Worked/WorkedIndex'




const App = () => {
  return (
    <>
    <GlobalStyle />
    <Header/>
    <AboutMe />
    <WorkedIndex/>
    </>
  )
}

export default App