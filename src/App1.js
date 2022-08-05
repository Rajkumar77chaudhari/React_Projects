import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(false);
  const buttonHandler = () => {
    setValue((current) => !current);
  };
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    //
    <div>
      <div className="box" id={value ? "black" : "white"}>
        {value ? "black" : "white"}
      </div>
      <button onClick={buttonHandler} type="button">
        CHANGE IT
      </button>
      <h1>{value ? "YEAH" : "NO"}</h1>
    </div>
  );
};

export default App;
