import styled from "styled-components"
import H2 from "../H2"
import Li from "../Li"
import Paragraphe from "../Paragraphe"

// J'ai un titre, et 2 box.
// 1ere box j'ai 3 articles
// Et 1 quatriem artcile avec un paragraphe 
// Et une list

// Le H2 vient de dehors et Parapgraphe
const MainContainer = styled.main`
display: flex;
flex-direction: column;
    justify-content: center;
    padding: 50px;
}
`

const Container = styled.section`
display: flex;


`
const Article = styled.article`
  width: 50%;

`
const SubArticle = styled.div`

`
const RawUl = styled.span`
display: flex;
`

const Ul = styled.ul`

`



const AboutMe = () => {
  // console.log(props);
  return (
    <MainContainer >
    <H2 title='01. About Me'/>
    <Container>
    <Article>
      <SubArticle>
        <Paragraphe text="Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!"/>
      </SubArticle>
      <SubArticle>

        <Paragraphe text="Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients."/>
      </SubArticle>
        <SubArticle>

        <Paragraphe text="I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React."/>
        </SubArticle>
        <SubArticle>

        <Paragraphe text="Here are a few technologies I’ve been working with recently: "/>
        </SubArticle>
        <Article>
      <RawUl>
        <Ul>
          <Li list="JavaScript (ES6+)" />
          <Li list="React" />
          <Li list="Node.js" />       
          </Ul>
          <Ul>
          <Li list="TypeScript" />
          <Li list="Eleventy" />
          <Li list="WordPress" />
          </Ul>
          </RawUl>
        </Article>
    </Article>
    <Article>
      <img src="" alt="photo" />
    </Article>
    </Container>
    </MainContainer>
  )
}

export default AboutMe