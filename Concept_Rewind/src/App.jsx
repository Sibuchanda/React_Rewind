import React, { useState } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";

const App = () => {
  const [usertext, setUsertext] = useState("");
  return (
    <>
      <Child1 usertext={usertext} setUsertext={setUsertext}/>
      <Child2 usertext={usertext}/>
    </>
  );
};

export default App;
