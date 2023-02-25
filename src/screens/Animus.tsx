import { useState } from "react";
import styled from "styled-components";
import { skyfireObj } from "../data/totb";

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

const EnemyItems = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 5px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid white;
`;

function Animus() {
  const [isSort, setIsSort] = useState(true);
  const [totbObj, setTotbObj] = useState(skyfireObj);

  const sorting = () => {
    const data = skyfireObj.enemy
      .concat()
      .sort((a, b) => (a.location.region < b.location.region ? 1 : -1));

    if (isSort) {
      setTotbObj((prev) => {
        let temp = Object.assign({}, prev);
        temp.enemy = data;
        return temp;
      });
    } else {
      setTotbObj(skyfireObj);
    }
  };

  function clickSortBtn() {
    setIsSort((prev) => !prev);
    sorting();
  }
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
          {totbObj?.enemy.map((item) => (
            <EnemyItems
              key={item.enemyName}
              bgColor={item.bgColor}
              color={item.fontColor}
            >
              <div>{item.enemyName}</div>
              <div>
                <span>{item.location.direction} </span>
                <span>{item.location.region} </span>
                <br />
                {item.location.area}
              </div>
            </EnemyItems>
          ))}
        </TotbEnemyBox>
        <TotbDungeonBox></TotbDungeonBox>
      </TotbBox>
      <button onClick={clickSortBtn}>KimBab is very good</button>
    </Wrapper>
  );
}

export default Animus;
