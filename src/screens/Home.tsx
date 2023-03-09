import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 28px;
`;

const Welcome = styled.h1`
  font-size: 28px;
  color: white;
`;

function Home() {
  return (
    <Wrapper>
      <Welcome>
        이 페이지는 아트마와 아니무스를 좀 편하게 보기 위한 그런 것 입니다.
      </Welcome>
    </Wrapper>
  );
}

export default Home;
