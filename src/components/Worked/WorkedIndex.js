import styled from "styled-components"
import { matrix } from "../../styles/colors"
import { mediumPlus2 } from "../../styles/fontSize"
import H2 from "../H2"
import Li from "../Li"
import Paragraphe from "../Paragraphe"
import Span from "../Span"
import BtnSelect from "./BtnSelect"

const Container = styled.main`
margin: 50px;
padding-left: 30%;
`

const Section = styled.section`
display: flex;
gap: 5%;
`
const Article= styled.article`
width : 70%;


`
const Div = styled.div`

`
const SpanText = styled.span`
color : ${matrix};
font-size: ${mediumPlus2};
display: flex;
align-items: center;
gap: 1%;
`


const WorkedIndex = () => {
  return (
  <Container>
  
    <H2 title='Where I’ve Worked'/>
    <Section>
    
      <BtnSelect/>
        <Div>
        <SpanText>
        <Paragraphe text="Engineer"/>
        @ Upstatement
        </SpanText>
        <Paragraphe text="May 2018 - Present"/>

        <Article>
          <Li list="Write modern, performant, maintainable code for a diverse array of client and internal projects" />
          <Li list="Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify" />
          <Li list="Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis" />       
        </Article>
        </Div>
        
    </Section>
  </Container>
  )
}

export default WorkedIndex