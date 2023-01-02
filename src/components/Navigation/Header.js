import styled from "styled-components";
import Links from "./Links";

// Ici c'est le composant du Header. Il englobe un
// SVG et une OL avec des ancres et un boutton

const Head = styled.header`
  background: red;
  display: flex;
  height: 70px;
`;
const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: blue;
`;
const Article = styled.article`
  width: 100%;
`;
const OrderedList = styled.ol`

  background: red;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  color: white;
  background-color: green;
  border: 1px solid;
  border-radius: 10px;
  width: 70px;
  height: 30px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <>
      <Head>
        <Nav>
          <Article>
            <img src="" alt="SVG" />
          </Article>
          <OrderedList>
            <Links />
          </OrderedList>
          <Button>Resume</Button>
        </Nav>
      </Head>
    </>
  );
};

export default Header;
