import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FlexLayout from "./FlexLayout";
import GridLayout from "./GridLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FlexLayout />
      <GridLayout />
    </>
  );
}

export default App;
