import "./CVEditor.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

export default function CVEditor() {
  return (
    <div className="CVEditor">
      <PersonalDetails></PersonalDetails>
      <Education></Education>
      <WorkExperience></WorkExperience>
    </div>
  );
}
