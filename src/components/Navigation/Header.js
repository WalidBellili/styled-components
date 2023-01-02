import { Link } from "react-router-dom";
import styled from "styled-components";

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
  justify-content: space-around;
`;

const Button = styled.button`
width: 30px;
`

const Header = () => {
  return (
    <>
      <Head>
        <Nav>
          <Article>
            <img src="" alt="test" />
          </Article>
          <OrderedList>
            <li>rdfsdfg</li>
            <li>rdfsdfg</li>
            <li>rdfsdfg</li>
            <li>rdfsdfg</li>
          </OrderedList>
         
            <Button>btn</Button>
         
        </Nav>
      </Head>
      {/* <header>
        <nav>
          <div>
            <img src="" alt="test" />
          </div>
          <ol>
            <li>sfefef</li>
            <li>sfefef</li>
            <li>sfefef</li>
            <li>sfefef</li>
          </ol>
          <button>test</button>
        </nav>
      </header> */}
    </>
  );
};

export default Header;
