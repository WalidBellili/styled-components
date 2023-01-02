import styled from "styled-components"
import { colorHeadlines, colorParapgraph, matrix } from "../../styles/colors"
import { extra, small } from "../../styles/fontSize"
import Paragraphe from "../Paragraphe"


// J'ai 1 section qui renferme :
// 1 titre H1,
// un H2
// un H3
// un Paragraphe
// un button
const Section = styled.section`
width: 80%;

padding: 50px;
`
const Article = styled.article`



`
const H1 = styled.h1`
color: ${matrix};
font-size: ${small};
`
const H2 = styled.h2`
color: ${colorHeadlines};
font-size: ${extra};
`
const H3 = styled.h3`
color: ${colorParapgraph};
font-size: ${extra};
`


const Greetings = () => {
  return (
    <Section>
    <Article>
        <H1>Hi, my name is</H1>
        <H2>Brittany Chiang</H2>
        <H3>I build things for the web.</H3>
        <Paragraphe text="I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement." />
    </Article>
    </Section>
  )
}

export default Greetings