import {
  useDetails,
  useDetailsReducer,
} from "../../contexts/PersonalDetailsContext";

export default function PersonalDetails() {
  let details = useDetails();
  let reducer = useDetailsReducer();

  return (
    <>
      <h4>Personal Statement</h4>
      <input
        type="text"
        placeholder="Name:"
        value={details.name}
        onChange={(e) =>
          reducer({ task: "edit", field: "name", value: e.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Name:"
        value={details.email}
        onChange={(e) =>
          reducer({ task: "edit", field: "email", value: e.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Name:"
        value={details.phoneNumber}
        onChange={(e) =>
          reducer({ task: "edit", field: "phoneNumber", value: e.target.value })
        }
      ></input>
      <textarea
        type=""
        placeholder="Name:"
        value={details.personalStatement}
        onChange={(e) =>
          reducer({
            task: "edit",
            field: "personalStatement",
            value: e.target.value,
          })
        }
      ></textarea>
    </>
  );
}
