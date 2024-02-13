import { ChangeEvent, useEffect, useRef, useState } from "react";
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
  IEnemy,
  IFATEs,
  Ileves,
  IDungeon,
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
    if (props.color === "라노시아") {
      return "#BE0622";
    } else if (props.color === "다날란") {
      return "#0B0304";
    } else if (props.color === "검은장막 숲") {
      return "#FCB301";
    } else if (props.color === "모르도나") {
      return "#C170BA";
    } else {
      return "#5792C0";
    }
  }};
  color: ${(props) => {
    if (props.color === "다날란") {
      return "#FFCE03";
    } else if (props.color === "검은장막 숲") {
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

// 세개 다 똑같은 형태니까 상속받는게 효율적일듯 .

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
  &.checked {
    background-color: gray;
    color: whitesmoke;
  }
`;

const TotbFATEsBox = styled(AnimusBox)``;
const TotbFATEsItem = styled(AnimusItems)<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.bgColor.match(/다날란/)
      ? "#0B0304"
      : props.bgColor.match(/커르다스/)
      ? "#5792C0"
      : props.bgColor.match(/모르도나/)
      ? "#C170BA"
      : props.bgColor.match(/검은장막/)
      ? "#FCB301"
      : props.bgColor.match(/라노시아/)
      ? "#BE0622"
      : null};
  color: ${(props) => (props.bgColor.match(/다날란/) ? "#FFCE03" : null)};
  &.checked {
    background-color: gray;
    color: whitesmoke;
  }
`;
const TotbLevesBox = styled(AnimusBox)``;
const TotbLevesItem = styled(AnimusItems)<{ bgColor: string }>`
  background-color: ${(props) =>
    props.bgColor.match(/다날란/)
      ? "#0B0304"
      : props.bgColor.match(/커르다스/)
      ? "#5792C0"
      : props.bgColor.match(/모르도나/)
      ? "#C170BA"
      : null};
  color: ${(props) => (props.bgColor.match(/다날란/) ? "#FFCE03" : "#ffd000")};
  &.checked {
    background-color: gray;
    color: whitesmoke;
  }
`;

const GCMark = styled.img`
  width: 40px;
  height: 40px;
`;

interface IsaveObj {
  enemy: string[];
  dungeon: string[];
  fates: string[];
  leve: string[];
}

function Animus() {
  const [totbObj, setTotbObj] = useState(skyfireObj);
  const [currentSection, setCurrentSection] = useState("Enemy");
  const [saveArr, setSaveArr] = useState<IsaveObj>({
    enemy: [],
    dungeon: [],
    fates: [],
    leve: [],
  });
  const selectBookRef = useRef<HTMLSelectElement>(null);
  const selectCategoryRef = useRef<HTMLSelectElement>(null);

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

  // 선택한거 보여주는 함수
  const showSelectCategory = (value: string) => {
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
        alert("뭔가 잘못되었습니다.");
    }
  };
  // 카테고리를 바꿨을때 실행하는 함수
  const selectCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    showSelectCategory(value);
    localStorage.setItem("selectCategory", value);
  };

  //황도 12문서오브젝트를 설정하는 함수
  const showTotbObj = (value: string) => {
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
        alert("뭔가 잘못되었습니다.");
    }
  };
  // 책 변경 함수
  const selectBookChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    showTotbObj(value);
    localStorage.setItem("bookCategory", value);
  };

  // 처음 실행했을때 마지막으로 오픈한 부분을 불러오기.
  useEffect(() => {
    const saveBookCategory = localStorage.getItem("bookCategory");
    const saveSelectCategory = localStorage.getItem("selectCategory");
    if (saveBookCategory && selectBookRef.current) {
      selectBookRef.current.value = saveBookCategory;
      showTotbObj(saveBookCategory);
    }

    if (saveSelectCategory && selectCategoryRef.current) {
      selectCategoryRef.current.value = saveSelectCategory;
      showSelectCategory(saveSelectCategory);
    }
  });

  useEffect(() => {
    const a = localStorage.getItem("EnemyCheck");
    if (a) {
      const b = JSON.parse(a);
      setSaveArr(b);
    }
  }, []);

  function clickSave(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: IEnemy | IFATEs | Ileves | IDungeon,
    type: "enemy" | "dungeon" | "FATEs" | "leves"
  ) {
    event.currentTarget.classList.toggle("checked");
    switch (type) {
      case "enemy":
        if (saveArr.enemy.find((e) => e === item.id)) {
          setSaveArr((prev) => {
            const obj = Object.assign({}, prev);
            const enemy = [...prev.enemy].filter((e) => e !== item?.id);
            obj.enemy = enemy;
            return obj;
          });
        } else {
          setSaveArr((prev) => {
            const obj = Object.assign({}, prev);
            const enemy = [...prev.enemy, item.id];
            obj.enemy = enemy;
            return obj;
          });
        }
        break;
      case "dungeon":
        if (saveArr.dungeon.find((e) => e === item.id)) {
          console.log("있네?");
          setSaveArr((prev) => {
            const obj = Object.assign({}, prev);
            const dungeon = [...prev.dungeon].filter((e) => e !== item?.id);
            obj.dungeon = dungeon;
            return obj;
          });
        } else {
          setSaveArr((prev) => {
            console.log("없네?");
            const obj = Object.assign({}, prev);
            const dungeon = [...prev.dungeon, item.id];
            obj.dungeon = dungeon;
            return obj;
          });
        }
        break;
      case "FATEs":
        if (saveArr.fates.find((e) => e === item.id)) {
          setSaveArr((prev) => {
            const obj = Object.assign({}, prev);
            const fates = [...prev.fates].filter((e) => e !== item?.id);
            obj.fates = fates;
            return obj;
          });
        } else {
          setSaveArr((prev) => {
            const obj = Object.assign({}, prev);
            const fates = [...prev.fates, item.id];
            obj.fates = fates;
            return obj;
          });
        }
        break;
      case "leves":
        if (saveArr.leve.find((e) => e === item.id)) {
          setSaveArr((prev) => {
            const obj = Object.assign({}, prev);
            const leve = [...prev.leve].filter((e) => e !== item?.id);
            obj.leve = leve;
            return obj;
          });
        } else {
          setSaveArr((prev) => {
            const obj = Object.assign({}, prev);
            const leve = [...prev.leve, item.id];
            obj.leve = leve;
            return obj;
          });
        }
        break;
    }
  }

  useEffect(() => {
    localStorage.setItem("EnemyCheck", JSON.stringify(saveArr));
  }, [saveArr.enemy, saveArr.dungeon, saveArr.fates, saveArr.leve, saveArr]);
  return (
    <Wrapper>
      <SelectCategoryWrapper>
        <SelectCategory onChange={selectBookChange} ref={selectBookRef}>
          <option value={"fire1"}>불의서1</option>
          <option value={"fire2"}>불의서2</option>
          <option value={"fire3"}>불의서3</option>
          <option value={"water1"}>물의서1</option>
          <option value={"water2"}>물의서2</option>
          <option value={"water3"}>물의서3</option>
          <option value={"wind1"}>바람의서1</option>
          <option value={"wind2"}>바람의서2</option>
          <option value={"earth"}>땅의서1</option>
        </SelectCategory>
        <br />
        <SelectCategory ref={selectCategoryRef} onChange={selectCategoryChange}>
          <option value={"Enemy"}>적처치</option>
          <option value={"Dungeon"}>던전</option>
          <option value={"FATEs"}>돌발임무</option>
          <option value={"Leve"}>의뢰</option>
        </SelectCategory>
      </SelectCategoryWrapper>
      <TotbBox>
        {currentSection === "Enemy" ? (
          <TotbEnemyBox>
            {totbObj?.enemy.map((item) => (
              <EnemyItems
                onClick={(event) => clickSave(event, item, "enemy")}
                className={
                  saveArr.enemy?.find((e) => e === item.id)
                    ? "checked"
                    : undefined
                }
                key={item.id}
                bgColor={item.location.region}
                color={item.location.region}
                id={item.id}
              >
                <div>{item.name}</div>
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
              <DungeonItem
                onClick={(event) => clickSave(event, item, "dungeon")}
                className={
                  saveArr.dungeon?.find((e) => e === item.id)
                    ? "checked"
                    : undefined
                }
                key={index}
              >
                {item.name}
              </DungeonItem>
            ))}
          </TotbDungeonBox>
        ) : currentSection === "FATEs" ? (
          <TotbFATEsBox>
            {totbObj.FATEs.map((item, index) => (
              <TotbFATEsItem
                key={index}
                bgColor={item.location}
                onClick={(event) => clickSave(event, item, "FATEs")}
                className={
                  saveArr.fates?.find((e) => e === item.id)
                    ? "checked"
                    : undefined
                }
              >
                <div>{item.name}</div>
                <br />
                <div>{item.location}</div>
              </TotbFATEsItem>
            ))}
          </TotbFATEsBox>
        ) : currentSection === "Leve" ? (
          <TotbLevesBox>
            {totbObj.leves.map((item, index) => (
              <TotbLevesItem
                key={index}
                bgColor={item.location}
                onClick={(event) => clickSave(event, item, "leves")}
                className={
                  saveArr.leve?.find((e) => e === item.id)
                    ? "checked"
                    : undefined
                }
              >
                <div>{item.type}</div>
                <br />
                <div>{item.name}</div>
                <br />
                <div>{item.location}</div>
                <br />
                <div>{item.grandCompany}</div>
                {item.grandCompany === "불멸대" ? (
                  <GCMark alt="불멸대" src="img/levesand.png" />
                ) : item.grandCompany === "쌍사당" ? (
                  <GCMark alt="쌍사당" src="img/leveforest.png" />
                ) : item.grandCompany === "흑와단" ? (
                  <GCMark alt="흑와단" src="img/levebeach.png" />
                ) : (
                  <GCMark alt="길드" src="img/leve.jpg" />
                )}
              </TotbLevesItem>
            ))}
          </TotbLevesBox>
        ) : (
          <div>뭔가 문제가 발생함</div>
        )}
      </TotbBox>
    </Wrapper>
  );
}

export default Animus;
