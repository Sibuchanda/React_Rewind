import React from "react";
import { Darklight } from "./Challenges/DarkLightMode/Darklight";
import { Themeprovider } from "./Challenges/DarkLightMode/Themeprovider";

const App = () => {
  return (
    <Themeprovider>
      <Darklight />
    </Themeprovider>
  );
};

export default App;
