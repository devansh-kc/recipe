import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Pages from './pages/Pages';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <GiKnifeFork />
            deliciousssss
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Lobster Two', cursive;
  font-weight: 400;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
