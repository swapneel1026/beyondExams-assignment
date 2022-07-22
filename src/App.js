import "./App.css";
import { useState } from "react";
import InputComponent from "./components/InputComponent";
import OutputComponent from "./components/OutputComponent";
function App() {
  const [ui, setUi] = useState("");
  return (
    <>
      <h1>BeyondExams Assignment</h1>
      <div className="App">
        <InputComponent is={ui} st={setUi} />
        <OutputComponent is={ui} />
      </div>
    </>
  );
}

export default App;
