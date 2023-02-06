import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 40px;
  color: white;
`;

function NotFound() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  useEffect(() => {
    setTimeout(goHome, 2000);
  });
  return (
    <H1>
      404 Not found!
      <hr />
      2초후 홈으로 돌아갑니다!
    </H1>
  );
}

export default NotFound;
