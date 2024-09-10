import "./App.css";
import { useState } from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

// Bulb 같은 자식 컴포넌트들은 부모로부터 받는 props 값이 변하면
// 리렌더링이 발생하게 된다!
// Bulb 컴포넌트가 호출되었을 때 consolg.log로 light props의 값을
// console에 출력하면 첫번째 랜더링 = off / 켜기를 누르면 리렌더링-> 콘솔에서 on이 출력

// + 버튼을 누르게 되면 bulb 컴포넌트가 리렌더링 된다.
// 리엑트의 리렌더링 상황
// 1. state 값의 변경 / 
// 2. props 값의 변경 / 
// 3. 부모 컴포넌트의 리렌더링 = 자식 컴포넌트도 리렌더링

// app의 자식이 bulb이기 때문에 3번 상황에 맞게 리렌더링 되는 것
// conter 와 light를 분리!


function App() {

  // 인수로 초기 값을 받아 두 개의 값을 출력하는데 
  // 첫 번째는 현재 값, 두 번째는 상태 변화 함수
  // 배열을 받은 것이니 []
  // console.log(state);

  
  return (
    <>
    {/* <div>
      <Bulb/>
      <Counter/>

    </div> */}

   
    </>
  );
}

export default App;