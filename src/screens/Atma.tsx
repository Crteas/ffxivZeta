import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #edecec;
  padding-left: 10px;
  padding-bottom: 30vh;
`;
const AtmaSection = styled.section`
  display: flex;
  height: max-content;
  width: max-content;
  background-color: #5f5f5f;
`;
const AtmaLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #807f7f;
  width: 100px;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 389px) {
    display: none;
  }
`;
const FlagImg = styled.img`
  width: 20px;
  height: 20px;
`;
const AtmaItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  border-top: 1px solid #807f7f;
  border-right: 1px solid #807f7f;
`;
const AtmaItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #807f7f;
  div:first-child {
    display: flex;
    justify-content: center;
    width: 80%;
    border-right: 1px solid #807f7f;
  }
  div:last-child {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #e4e4e4;
    font-weight: 400;
    font-size: 17px;
  }
  div {
    display: flex;
    align-items: center;
    /*이 height가 전체적인 높이를 정해줌*/
    height: 90px;
  }
`;
const Warning = styled.footer``;
type atmaObj = {
  location: string;
  atmaInfo: { location: string; atma: string; bgColor: string }[];
};
function Zeta() {
  const blackShroudObj: atmaObj = {
    location: "검은장막숲",
    atmaInfo: [
      { location: "중부삼림", atma: "처녀자리", bgColor: "#45bebe" },
      { location: "동부삼림", atma: "염소자리", bgColor: "#25A284" },
      { location: "북부삼림", atma: "사수자리", bgColor: "#7DCA3C" },
    ],
  };
  const laNosceaObj: atmaObj = {
    location: "라노시아",
    atmaInfo: [
      { location: "중부 라노시아", atma: "양자리", bgColor: "#96a6e4" },
      { location: "서부 라노시아", atma: "게자리", bgColor: "#D75291" },
      { location: "저지 라노시아", atma: "물고기자리", bgColor: "#3162BE" },
      { location: "외지 라노시아", atma: "사자자리", bgColor: "#beb224" },
      { location: "고지 라노시아", atma: "물병자리", bgColor: "#2D9DC2" },
    ],
  };
  const thanalanObj: atmaObj = {
    location: "다날란",
    atmaInfo: [
      { location: "중부 다날란", atma: "천칭자리", bgColor: "#E64A34" },
      { location: "동부 다날란", atma: "황소자리", bgColor: "#ED962F" },
      { location: "서부 다날란", atma: "쌍둥이자리", bgColor: "#D448F1" },
      { location: "남부 다날란", atma: "전갈자리", bgColor: "#BD1D25" },
    ],
  };
  return (
    <Wrapper>
      <AtmaSection>
        <AtmaLocation>
          <FlagImg src="img/beach.jpg" />
          {laNosceaObj.location}
        </AtmaLocation>
        <AtmaItems>
          {laNosceaObj.atmaInfo.map((item) => (
            <AtmaItem key={item.atma}>
              <div>{item.location}</div>
              <div style={{ backgroundColor: item.bgColor }}>
                {item.atma} 아트마
              </div>
            </AtmaItem>
          ))}
        </AtmaItems>
      </AtmaSection>
      <AtmaSection>
        <AtmaLocation>
          <FlagImg src="img/sand.jpg" />
          {thanalanObj.location}
        </AtmaLocation>
        <AtmaItems>
          {thanalanObj.atmaInfo.map((item) => (
            <AtmaItem key={item.atma}>
              <div>{item.location}</div>
              <div style={{ backgroundColor: item.bgColor }}>
                {item.atma} 아트마
              </div>
            </AtmaItem>
          ))}
        </AtmaItems>
      </AtmaSection>
      <AtmaSection>
        <AtmaLocation>
          <FlagImg src="img/forest.jpg" />
          {blackShroudObj.location}
        </AtmaLocation>
        <AtmaItems>
          {blackShroudObj.atmaInfo.map((item) => (
            <AtmaItem key={item.atma}>
              <div>{item.location}</div>
              <div style={{ backgroundColor: item.bgColor }}>
                {item.atma} 아트마
              </div>
            </AtmaItem>
          ))}
        </AtmaItems>
      </AtmaSection>
    </Wrapper>
  );
}

export default Zeta;
