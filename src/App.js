import "./style/App.css";
import CVEditor from "./components/CVEditor/CVEditor";
import Preview from "./components/Preview/Preview";
import PersonalDetailsContext from "./contexts/PersonalDetailsContext";
import EducationContext from "./contexts/EducationContext";
import WorkExperienceContext from "./contexts/WorkExperienceContext";

function App() {
  return (
    <div className="App">
      <PersonalDetailsContext>
        <EducationContext>
          <WorkExperienceContext>
            <CVEditor></CVEditor>
            <Preview></Preview>
          </WorkExperienceContext>
        </EducationContext>
      </PersonalDetailsContext>
    </div>
  );
}

export default App;
