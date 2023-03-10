import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import {
  skyfireObj,
  skyfireObj2,
  netherfire,
  skyfall,
  skyfall2,
  netherfall,
  skywind,
  skywind2,
  skyearth,
} from "../data/totb";
// const localColor = {
//   laNoscea: "#BE0622",
//   blackforest: { bgColor: "#FCB301", font: "#161616" },
//   uldah: { bgColor: "#0B0304", font: "#FFCE03" },
//   morDhona: "#C170BA",
//   coerthas: "#5792C0",
// };

const MOBILE_WIDTH = `768px`;
const UPPER_MOBILE_WIDTH = `769px`;

const Wrapper = styled.div`
  @media screen and (min-width: ${UPPER_MOBILE_WIDTH}) {
    padding-left: 36px;
  }
  color: #f5eeee;
`;

const SelectCategoryWrapper = styled.div`
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column;
    padding: 0 18px;
  }
`;

const SelectCategory = styled.select`
  background-color: #3d3c3d;
  border: 1px solid gray;
  padding: 5px;
  color: white;
  &:focus {
    outline: 0;
  }
  option {
    color: white;
    margin-bottom: 10px;
  }
  margin-bottom: 10px;
`;

const TotbBox = styled.div`
  @media screen and (min-width: ${UPPER_MOBILE_WIDTH}) {
    width: 760px;
    height: 380px;
  }
  margin-top: 20px;
  box-sizing: border-box;
`;
const AnimusItems = styled.div`
  padding: 10px 0 0 10px;
  box-sizing: border-box;
  width: 600px;
  height: 260px;
  font-size: 25px;
  font-weight: 600;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    width: 93vw;
  }
`;

const TotbEnemyBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding-bottom: 15vh;
  }
  /* display: grid;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr); */
`;

const EnemyItems = styled.div<{ bgColor: string }>`
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    width: 93vw;
  }
  display: flex;
  width: 170px;
  height: 130px;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 5px;
  background-color: ${(props) => {
    if (props.color === "????????????") {
      return "#BE0622";
    } else if (props.color === "?????????") {
      return "#0B0304";
    } else if (props.color === "???????????? ???") {
      return "#FCB301";
    } else if (props.color === "????????????") {
      return "#C170BA";
    } else {
      return "#5792C0";
    }
  }};
  color: ${(props) => {
    if (props.color === "?????????") {
      return "#FFCE03";
    } else if (props.color === "???????????? ???") {
      return "#0d6d00";
    }
  }};
  font-size: 18px;
  font-weight: 500;
  border: 1px solid white;
  &.checked {
    background-color: gray;
    color: whitesmoke;
  }
`;

// ?????? ??? ????????? ???????????? ??????????????? ??????????????? .

const AnimusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;
const TotbDungeonBox = styled(AnimusBox)``;
const DungeonItem = styled(AnimusItems)`
  background-color: #2c7cbe;
  color: #ffffff;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotbFATEsBox = styled(AnimusBox)``;
const TotbFATEsItem = styled(AnimusItems)<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.bgColor.match(/?????????/)
      ? "#0B0304"
      : props.bgColor.match(/????????????/)
      ? "#5792C0"
      : props.bgColor.match(/????????????/)
      ? "#C170BA"
      : props.bgColor.match(/????????????/)
      ? "#FCB301"
      : props.bgColor.match(/????????????/)
      ? "#BE0622"
      : null};
  color: ${(props) => (props.bgColor.match(/?????????/) ? "#FFCE03" : null)};
`;
const TotbLevesBox = styled(AnimusBox)``;
const TotbLevesItem = styled(AnimusItems)<{ bgColor: string }>`
  background-color: ${(props) =>
    props.bgColor.match(/?????????/)
      ? "#0B0304"
      : props.bgColor.match(/????????????/)
      ? "#5792C0"
      : props.bgColor.match(/????????????/)
      ? "#C170BA"
      : null};
  color: ${(props) => (props.bgColor.match(/?????????/) ? "#FFCE03" : "#ffd000")};
`;

const GCMark = styled.img`
  width: 40px;
  height: 40px;
`;

function Animus() {
  const [totbObj, setTotbObj] = useState(skyfireObj);
  const [currentSection, setCurrentSection] = useState("Enemy");
  const [saveArr, setSaveArr] = useState<string[]>([]);

  // sorting EnemyArray
  // useEffect(() => {
  //   const sorting = () => {
  //     const data = skyfireObj.enemy
  //       .concat()
  //       .sort((a, b) => (a.location.region < b.location.region ? 1 : -1));

  //     setTotbObj((prev) => {
  //       let temp = Object.assign({}, prev);
  //       temp.enemy = data;
  //       return temp;
  //     });
  //   };
  //   sorting();
  // }, []);

  const selectCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    switch (value) {
      case "Enemy":
        setCurrentSection(value);
        break;
      case "Dungeon":
        setCurrentSection(value);
        break;
      case "FATEs":
        setCurrentSection(value);
        break;
      case "Leve":
        setCurrentSection(value);
        break;
      default:
        alert("?????? ?????????????????????.");
    }
  };
  const selectBookChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    switch (value) {
      case "fire1":
        setTotbObj(skyfireObj);
        break;
      case "fire2":
        setTotbObj(skyfireObj2);
        break;
      case "fire3":
        setTotbObj(netherfire);
        break;
      case "water1":
        setTotbObj(skyfall);
        break;
      case "water2":
        setTotbObj(skyfall2);
        break;
      case "water3":
        setTotbObj(netherfall);
        break;
      case "wind1":
        setTotbObj(skywind);
        break;
      case "wind2":
        setTotbObj(skywind2);
        break;
      case "earth":
        setTotbObj(skyearth);
        break;
      default:
        alert("?????? ?????????????????????.");
    }
  };
  useEffect(() => {
    const a = localStorage.getItem("EnemyCheck");
    if (a) {
      const b = JSON.parse(a);
      setSaveArr(b);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("EnemyCheck", JSON.stringify(saveArr));
  }, [saveArr]);

  return (
    <Wrapper>
      <SelectCategoryWrapper>
        <SelectCategory onChange={selectBookChange}>
          <option value={"fire1"}>?????????1</option>
          <option value={"fire2"}>?????????2</option>
          <option value={"fire3"}>?????????3</option>
          <option value={"water1"}>?????????1</option>
          <option value={"water2"}>?????????2</option>
          <option value={"water3"}>?????????3</option>
          <option value={"wind1"}>????????????1</option>
          <option value={"wind2"}>????????????2</option>
          <option value={"earth"}>?????????1</option>
        </SelectCategory>
        <br />
        <SelectCategory onChange={selectCategoryChange}>
          <option value={"Enemy"}>?????????</option>
          <option value={"Dungeon"}>??????</option>
          <option value={"FATEs"}>????????????</option>
          <option value={"Leve"}>??????</option>
        </SelectCategory>
      </SelectCategoryWrapper>
      <TotbBox>
        {currentSection === "Enemy" ? (
          <TotbEnemyBox>
            {totbObj?.enemy.map((item) => (
              <EnemyItems
                onClick={(event) => {
                  event.currentTarget.classList.toggle("checked");
                  if (saveArr.find((e) => e === item.enemyName)) {
                    setSaveArr((prev) =>
                      [...prev].filter((e) => e !== item.enemyName)
                    );
                  } else {
                    setSaveArr((prev) => [...prev, item.enemyName]);
                  }
                }}
                className={
                  saveArr.find((e) => e === item.enemyName)
                    ? "checked"
                    : undefined
                }
                key={item.enemyName}
                bgColor={item.location.region}
                color={item.location.region}
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
        ) : currentSection === "Dungeon" ? (
          <TotbDungeonBox>
            {totbObj.dungeon.map((item, index) => (
              <DungeonItem key={index}>{item}</DungeonItem>
            ))}
          </TotbDungeonBox>
        ) : currentSection === "FATEs" ? (
          <TotbFATEsBox>
            {totbObj.FATEs.map((item, index) => (
              <TotbFATEsItem key={index} bgColor={item.location}>
                <div>{item.name}</div>
                <br />
                <div>{item.location}</div>
              </TotbFATEsItem>
            ))}
          </TotbFATEsBox>
        ) : currentSection === "Leve" ? (
          <TotbLevesBox>
            {totbObj.leves.map((item, index) => (
              <TotbLevesItem key={index} bgColor={item.location}>
                <div>{item.type}</div>
                <br />
                <div>{item.name}</div>
                <br />
                <div>{item.location}</div>
                <br />
                <div>{item.grandCompany}</div>
                {item.grandCompany === "?????????" ? (
                  <GCMark alt="?????????" src="img/levesand.png" />
                ) : item.grandCompany === "?????????" ? (
                  <GCMark alt="?????????" src="img/leveforest.png" />
                ) : item.grandCompany === "?????????" ? (
                  <GCMark alt="?????????" src="img/levebeach.png" />
                ) : (
                  <GCMark alt="??????" src="img/leve.jpg" />
                )}
              </TotbLevesItem>
            ))}
          </TotbLevesBox>
        ) : (
          <div>?????? ????????? ?????????</div>
        )}
      </TotbBox>
    </Wrapper>
  );
}

export default Animus;
