import { useDetails } from "../../contexts/PersonalDetailsContext";

export default function PersonalDetails() {
  let details = useDetails();

  return (
    <>
      <div className="basicInfo">
        <div className="name">{details.name}</div>

        <div className="email">{details.email}</div>

        <div className="phone">{details.phoneNumber}</div>
      </div>

      <div className="heading">Personal Statement</div>
      <div className="personalStatement">{details.personalStatement}</div>
    </>
  );
}
