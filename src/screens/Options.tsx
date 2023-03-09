import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  padding-left: 28px;
`;

function Options() {
  function resetClick() {
    const result = window.confirm("정말로 초기화 하시겠습니까?");
    if (result === true) {
      localStorage.setItem("EnemyCheck", "");
    }
  }
  return (
    <Wrapper>
      <span>아니무스 초기화 : </span>
      <button onClick={resetClick}>초기화</button>
    </Wrapper>
  );
}

export default Options;
