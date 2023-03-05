import { useDetails } from "../../contexts/PersonalDetailsContext";

export default function PersonalDetails() {
  let details = useDetails();

  return (
    <>
      <h4>Name</h4>
      <h5>{details.name}</h5>
      <h4>Email</h4>
      <h5>{details.email}</h5>

      <h4>Phone number</h4>
      <h5>{details.phoneNumber}</h5>

      <h4>personalStatement</h4>
      <h5>{details.personalStatement}</h5>
    </>
  );
}
