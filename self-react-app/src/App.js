import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  // cleanup function
  // const byeFn = () => {
  //   console.log("destroyed");
  // };
  // const hiFn = () => {
  //   console.log("created");
  //   // 컴포넌트가 없어질 때 실행될 함수를 return시키자
  //   return byeFn;
  // };
  // useEffect(hiFn, []);
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function TernaryOperator() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("render all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword or counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>value : {counter}</h1>
      <button onClick={onClick}>Click me</button>

      {/* <h1 className={styles.title}>Hello React!!!</h1>
      <h3 className={styles.main}>className differ?</h3>
      <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
