import "./CVEditor.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";

export default function CVEditor() {
  return (
    <div className="CVEditor">
      <PersonalDetails></PersonalDetails>
      <Education></Education>
    </div>
  );
}
