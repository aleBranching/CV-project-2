import React from "react";
import { useDetails, useDetailsReducer } from "../../contexts/EducationContext";

export default function Education() {
  let details = useDetails();
  let dispatch = useDetailsReducer();

  return (
    <div>
      {details.map((anElement) => {
        return (
          <div key={anElement.key}>
            <h4>An Education:</h4>
            <input
              type="text"
              data-field-type="educationTitle"
              onChange={(e) =>
                dispatch({
                  task: "edit",
                  key: anElement.key,
                  field: "educationTitle",
                  value: e.target.value,
                })
              }
              value={anElement.educationTitle}
              placeholder="Education Title"
            ></input>
            <input
              type="date"
              data-field-type="startDate"
              //   onChange={this.handleChange}
              onChange={(e) =>
                dispatch({
                  task: "edit",
                  key: anElement.key,
                  field: "startDate",
                  value: e.target.value,
                })
              }
              value={anElement.startDate}
              placeholder="Start year:"
            ></input>
            <input
              type="date"
              data-field-type="finishDate"
              //   onChange={}
              value={anElement.finishDate}
              onChange={(e) =>
                dispatch({
                  task: "edit",
                  key: anElement.key,
                  field: "finishDate",
                  value: e.target.value,
                })
              }
              placeholder="Finish year:"
            ></input>
            <input
              type="text"
              data-field-type="additionalInfo"
              //   onChange={this.handleChange}
              value={anElement.additionalInfo}
              onChange={(e) =>
                dispatch({
                  task: "edit",
                  key: anElement.key,
                  field: "additionalInfo",
                  value: e.target.value,
                })
              }
              placeholder="Additional Info:"
            ></input>
            <button
              onClick={() => dispatch({ task: "delete", id: anElement.key })}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button onClick={() => dispatch({ task: "add" })}>
        Add extra Education
      </button>
    </div>
  );
}
