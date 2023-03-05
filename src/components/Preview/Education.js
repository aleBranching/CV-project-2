import React from "react";
import { useDetails } from "../../contexts/EducationContext";

export default function Education() {
  let details = useDetails();

  return (
    // details is an array so need to map this instead
    <>
      {details.map((detail) => {
        return (
          <React.Fragment key={detail.key}>
            <h4> title</h4>
            <p>{detail.educationTitle}</p>
            <h4> startDate</h4>
            <p>{detail.startDate}</p>
            <h4> finish date</h4>
            <p>{detail.finishDate}</p>
            <h4> additional Info</h4>
            <p>{detail.additionalInfo}</p>
          </React.Fragment>
        );
      })}
    </>
  );
}
