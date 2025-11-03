import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FlexLayout from "./pages/FlexLayout";
import GridLayout from "./pages/GridLayout";
import GridTemplate from "./pages/GridTemplate";
import MixLayout from "./pages/MixLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FlexLayout />
      <GridLayout />
      <MixLayout />
      {/* <GridTemplate /> */}
    </>
  );
}

export default App;
