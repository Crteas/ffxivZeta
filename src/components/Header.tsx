import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";

interface a {
  isMatch?: boolean;
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #303030;
  font-size: 20px;
  margin-bottom: 32px;
  padding-left: 20px;
  li {
    list-style: none;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
const Item = styled.span<a>`
  text-decoration: none;
  color: ${(props) => (!props.isMatch ? "gray" : "")};
`;

function Header() {
  const isHome = useMatch("/")?.pathname === "/";
  const isZenith = useMatch("/zenith")?.pathname === "/zenith";
  const isAtma = useMatch("/atma")?.pathname === "/atma";
  const isAnimus = useMatch("/animus")?.pathname === "/animus";
  return (
    <Nav>
      <li>
        <Link to={"/"}>
          <Item isMatch={isHome}>제타에 앞서</Item>
        </Link>
      </li>
      <li>
        <Link to={"/zenith"}>
          <Item isMatch={isZenith}>제니스</Item>
        </Link>
      </li>
      <li>
        <Link to={"/atma"}>
          <Item isMatch={isAtma}>아트마</Item>
        </Link>
      </li>
      <li>
        <Link to={"/animus"}>
          <Item isMatch={isAnimus}>아니무스</Item>
        </Link>
      </li>
    </Nav>
  );
}

export default Header;
