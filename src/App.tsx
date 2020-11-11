import React from "react";
import "./App.scss";
// import testImg from "./assets/images/test.png";

const App: React.FC = () => {
  const arr = [1, 2, 3, 4, 5];
  new Promise((res, rej) => {
    console.log(arr.includes(2));
    res();
  });
  return (
    <div className="wrap">
      <div>这是appdsadsa</div>
      {arr.includes(1) && <div>arr数组包括1</div>}
      {/* <img src={testImg} alt="" /> */}
    </div>
  );
};

export default App;
