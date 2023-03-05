import "./Preview.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

export default function Preview() {
  return (
    <div className="Preview">
      preview test<PersonalDetails></PersonalDetails>
      <Education></Education>
      <WorkExperience></WorkExperience>
    </div>
  );
}
