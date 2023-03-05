import React from "react";
import { useWorkDataContext } from "../../contexts/WorkExperienceContext";

export default function WorkExperience() {
  let data = useWorkDataContext();

  return (
    <div className="workExperience">
      <div className="heading">Work Experience </div>

      {data.map((anElement) => {
        return (
          <React.Fragment key={anElement.key}>
            <div className="heavySubWeight">{anElement.workTitle}</div>

            <div style={{ display: "flex", margin: "0.3rem 0 0.3rem 0" }}>
              <div>({anElement.startDate})</div>
              <span>&nbsp;</span>
              <div>-</div>
              <span>&nbsp;</span>
              <div>({anElement.finishDate})</div>
            </div>

            <ul className="bulletPoints">
              {anElement.bulletPoint.map((aBullet) => {
                return <li key={aBullet.key}>{aBullet.bullet}</li>;
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
}
