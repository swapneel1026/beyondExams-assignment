import "./App.css";
import { useState } from "react";
import InputComponent from "./components/InputComponent";
import OutputComponent from "./components/OutputComponent";
function App() {
  const [ui, setUi] = useState("");
  return (
    <div className="App">
      <InputComponent is={ui} st={setUi} />
      <OutputComponent is={ui} />
    </div>
  );
}

export default App;
