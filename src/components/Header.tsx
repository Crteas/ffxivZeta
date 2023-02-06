import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #303030;
  font-size: 20px;
  margin-bottom: 10px;
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

function Header() {
  return (
    <Nav>
      <li>
        <Link to={"/"}>제타에 앞서</Link>
      </li>
      <li>
        <Link to={"/zenith"}>제니스</Link>
      </li>
      <li>
        <Link to={"/atma"}>아트마</Link>
      </li>
      <li>
        <Link to={"/animus"}>아니무스</Link>
      </li>
    </Nav>
  );
}

export default Header;
