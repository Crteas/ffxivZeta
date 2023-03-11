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
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }
  textarea {
    width: 300px;
    height: 200px;
    resize: none;
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
        setArr(JSON.parse(items));
      }
    }
    if (isRoading) {
      roadStorageItem();
      setIsRoading((prev) => !prev);
    }
  }, [isRoading]);

  useEffect(() => {});

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

      <button onClick={btnClick}>Show</button>
      <Dialog ref={dialogRef}>
        <button onClick={clickExport}>Export</button>
        <button onClick={clickImport}>Import</button>
        <Dialog ref={dialogRef2}>
          <textarea readOnly onChange={changeArr} value={arr} />
          <form method="dialog">
            <button>닫기</button>
          </form>
        </Dialog>
        <Dialog ref={dialogRef3}>
          <textarea onChange={changeImportArr} value={importArr} />
          <button
            onClick={() => {
              if (importArr) {
                const a = importArr.split(",");
                const b = JSON.stringify(a);
                localStorage.setItem("EnemyCheck", b);
                setIsRoading((prev) => !prev);
              }
            }}
          >
            import!
          </button>
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
