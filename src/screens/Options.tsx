import {
  ChangeEvent,
  DialogHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  padding-left: 28px;
`;

const Dialog = styled.dialog`
  width: 400px;
  height: 400px;
  /* display: flex;
  flex-direction: column; */
  background-color: #303030;
  border: 1px solid black;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }
  textarea {
    background-color: #3d3c3d;
    width: 300px;
    height: 200px;
    resize: none;
    color: white;
    margin-bottom: 5px;
  }
  textarea:focus {
    outline: none;
  }
`;

function Options() {
  const [arr, setArr] = useState("");
  const [importArr, setImportArr] = useState("");
  const [isRoading, setIsRoading] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogRef2 = useRef<HTMLDialogElement>(null);
  const dialogRef3 = useRef<HTMLDialogElement>(null);

  const changeArr = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setArr(value);
  };
  const changeImportArr = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setImportArr(value);
  };
  useEffect(() => {
    function roadStorageItem() {
      const items = localStorage.getItem("EnemyCheck");
      if (items) {
        setArr(items);
      }
    }
    if (isRoading) {
      roadStorageItem();
      setIsRoading((prev) => !prev);
    }
  }, [isRoading]);

  function clickImportBtn() {
    if (importArr) {
      localStorage.setItem("EnemyCheck", importArr);
      setIsRoading((prev) => !prev);
    }
  }

  function resetClick() {
    const result = window.confirm("정말로 초기화 하시겠습니까?");
    if (result === true) {
      localStorage.setItem("EnemyCheck", "");
    }
  }
  function btnClick() {
    dialogRef.current?.showModal();
  }
  function clickExport() {
    dialogRef2.current?.showModal();
  }
  function clickImport() {
    dialogRef3.current?.showModal();
  }
  //console.log(importArr);
  return (
    <Wrapper>
      <span>아니무스 초기화 : </span>
      <button onClick={resetClick}>초기화</button>
      <br />
      <button onClick={btnClick}>따로저장하기</button>
      <Dialog ref={dialogRef}>
        <p style={{ color: "white" }}>
          불러오기를 잘 못 입력하실경우 오류가 발생합니다!! <br />
          주의해주세요!! <br />
          만약 오류가 발생했을시 아니무스 초기화를 눌러주세요
        </p>
        <br />
        <button onClick={clickExport}>저장하기</button>
        <button onClick={clickImport}>불러오기</button>
        <Dialog ref={dialogRef2}>
          <textarea readOnly onChange={changeArr} value={arr} />
          <form method="dialog">
            <button>닫기</button>
          </form>
        </Dialog>
        <Dialog ref={dialogRef3}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <textarea onChange={changeImportArr} value={importArr} />
            <button onClick={clickImportBtn}>적용</button>
          </div>
          <form method="dialog">
            <button>닫기</button>
          </form>
        </Dialog>
        <form method="dialog">
          <button>닫기</button>
        </form>
      </Dialog>
    </Wrapper>
  );
}

export default Options;
