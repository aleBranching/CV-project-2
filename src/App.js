import "./style/App.css";
import CVEditor from "./components/CVEditor/CVEditor";
import Preview from "./components/Preview/Preview";
import PersonalDetailsContext from "./contexts/PersonalDetailsContext";
import EducationContext from "./contexts/EducationContext";

function App() {
  return (
    <div className="App">
      <PersonalDetailsContext>
        <EducationContext>
          <CVEditor></CVEditor>
          <Preview></Preview>
        </EducationContext>
      </PersonalDetailsContext>
    </div>
  );
}

export default App;
