function Options() {
  function resetClick() {
    localStorage.setItem("EnemyCheck", "");
  }
  return (
    <>
      <button onClick={resetClick}>초기화</button>
    </>
  );
}

export default Options;
