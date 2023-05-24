import React from "react";
import { REACT_API_MSG, REACT_API_KEY } from "../config/env";

const Demo = () => {
  // to display the example message and key based on particular build
  console.log(REACT_API_MSG);
  console.log(REACT_API_KEY);
  
  return (
    <div>
      <h1>React</h1>
      <h4>With 3 different environment variables</h4>
    </div>
  );
};

export default Demo;
