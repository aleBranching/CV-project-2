import React from "react";
import { useDetails } from "../../contexts/EducationContext";

export default function Education() {
  let details = useDetails();

  return (
    // details is an array so need to map this instead
    <>
      <div className="heading">Education</div>
      {details.map((detail) => {
        return (
          <div key={detail.key} className="anEducation">
            <div className="heavySubWeight">{detail.educationTitle}</div>
            <span>&nbsp;&nbsp;</span>
            <div>({detail.startDate})</div>
            <span>&nbsp;</span>
            {"  - "}
            <span>&nbsp;</span>
            <div>({detail.finishDate})</div>
            <span>&nbsp;</span>

            <div>{detail.additionalInfo}</div>
          </div>
        );
      })}
    </>
  );
}
