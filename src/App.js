import "./style/App.css";
import CVEditor from "./components/CVEditor/CVEditor";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <div className="App">
      <CVEditor></CVEditor>
      <Preview></Preview>
    </div>
  );
}

export default App;
