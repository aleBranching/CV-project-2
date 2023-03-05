import React from "react";
import { useWorkDataContext } from "../../contexts/WorkExperienceContext";

export default function WorkExperience() {
  let data = useWorkDataContext();

  return (
    <>
      <h4>Work Experience </h4>

      {data.map((anElement) => {
        return (
          <React.Fragment key={anElement.key}>
            <h6> Work title</h6>
            <p>{anElement.workTitle}</p>
            <h6> Start Date</h6>
            <p>{anElement.startDate}</p>
            <h6> Finish Date</h6>
            <p>{anElement.finishDate}</p>

            <ul>
              {anElement.bulletPoint.map((aBullet) => {
                return <li key={aBullet.key}>{aBullet.bullet}</li>;
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </>
  );
}
