import styled from "styled-components"
import H2 from "../H2"
import Li from "../Li"
import Paragraphe from "../Paragraphe"
import BtnSelect from "./BtnSelect"

const Section = styled.section`

`
const Article= styled.article`

`
const Div = styled.div`

`

const WorkedIndex = () => {
  return (
  <>
  
    <H2/>
    <Section>
    
      <BtnSelect/>
        <Div>
        <Paragraphe text="Engineer @ Upstatement"/>
        <Paragraphe text="May 2018 - Present"/>
        <Article>
          <Li list="Write modern, performant, maintainable code for a diverse array of client and internal projects" />
          <Li list="Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify" />
          <Li list="Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis" />       
        </Article>
        </Div>
        
    </Section>
  </>
  )
}

export default WorkedIndex