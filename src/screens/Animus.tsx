import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 32px;
  color: white;
`;

const TotbBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 1000px;
  height: 430px;
  background-color: gray;
`;

const TotbCategory = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
`;

const TotbItems = styled.div`
  background-color: ghostwhite;
  color: coral;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const TotbEnemyBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-auto-flow: column;
  *:nth-child(1) {
    grid-row: span 3;
  }
  *:nth-child(2) {
    grid-row: span 3;
  }
  *:nth-child(3) {
    grid-row: span 2;
  }
  *:nth-child(4) {
    grid-row: span 2;
  }
  *:nth-child(5) {
    grid-row: span 2;
  }
  *:nth-child(6) {
    grid-row: span 2;
  }
  *:nth-child(7) {
    grid-row: span 2;
  }
  *:nth-child(8) {
    grid-row: span 2;
  }
  *:nth-child(9) {
    grid-row: span 3;
  }
  *:nth-child(10) {
    grid-row: span 3;
  }
`;

const TotbDungeonBox = styled.div`
  display: none;
`;

const companyColor = {
  maelstrom: "#BE0622",
  gridania: "#FCB301",
  uldah: { bgColor: "#0B0304", border: "#FFCE03" },
};

const skyfireObj = {
  enemy: [
    {
      enemyName: "대담한 이단자",
      enemyInfo: "모르도나 짙은안개 습원",
      bgColor: "",
    },
    {
      enemyName: "자이언트 벌목꾼",
      enemyInfo: "커르다스 중앙고지 큰바위 언덕",
    },
    { enemyName: "여울등뼈 사하긴", enemyInfo: "서부 라노시아 사프사 산란지" },
    { enemyName: "V대대 뱅가드", enemyInfo: "모르도나 짙은 안개 습원" },
    {
      enemyName: "인조합금 도브란",
      enemyInfo: "외지 라노시아 우가마로 무장광산",
    },
    { enemyName: "IV대대 검투사", enemyInfo: "서부 다날란 하늬바람 곶" },
    { enemyName: "잔라크 격투사", enemyInfo: "남부 다날란 잔라크" },
    { enemyName: "젖뿌리 꽃송이", enemyInfo: "검은장막 숲 동부삼림 실프 영지" },
    { enemyName: "바실리스크", enemyInfo: "북부 다날란 푸른안개 수맥" },
    { enemyName: "II대대 검투사", enemyInfo: "동부 라노시아 아젤리스 옛 가도" },
  ],
};

function Animus() {
  return (
    <Wrapper>
      <TotbBox>
        <TotbCategory>
          <TotbItems>적처치</TotbItems>
          <TotbItems>던전</TotbItems>
          <TotbItems>돌발임무</TotbItems>
          <TotbItems>의뢰</TotbItems>
        </TotbCategory>
        <TotbEnemyBox>
          {skyfireObj.enemy.map((item) => (
            <div>
              <div>{item.enemyName}</div>
              <div>{item.enemyInfo}</div>
            </div>
          ))}
        </TotbEnemyBox>
        <TotbDungeonBox></TotbDungeonBox>
      </TotbBox>
    </Wrapper>
  );
}

export default Animus;
