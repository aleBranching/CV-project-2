import React from "react";
import {
  useWorkDataContext,
  useWorkDataDispatch,
} from "../../contexts/WorkExperienceContext";

export default function WorkExperience() {
  let data = useWorkDataContext();

  let dispatch = useWorkDataDispatch();

  return (
    <>
      {data.map((anElement) => {
        return (
          <React.Fragment key={anElement.key}>
            <h4>A Work Experience:</h4>
            <input
              type="text"
              placeholder="Work Title"
              onChange={(e) =>
                dispatch({
                  task: "editMain",
                  key: anElement.key,
                  field: "workTitle",
                  value: e.target.value,
                })
              }
              value={anElement.workTitle}
            ></input>
            <input
              type="date"
              placeholder="Start year:"
              onChange={(e) =>
                dispatch({
                  task: "editMain",
                  key: anElement.key,
                  field: "startDate",
                  value: e.target.value,
                })
              }
              value={anElement.startDate}
            ></input>
            <input
              type="date"
              placeholder="Finish year:"
              onChange={(e) =>
                dispatch({
                  task: "editMain",
                  key: anElement.key,
                  field: "finishDate",
                  value: e.target.value,
                })
              }
              value={anElement.finishDate}
            ></input>
            {/* <input type="text" placeholder="Additional Info:" value={this.state.}></input> */}
            <h6>bullet points</h6>
            <ul>
              {anElement.bulletPoint.map((aBullet) => (
                <li key={aBullet.key}>
                  {" "}
                  <input
                    value={aBullet.bullet}
                    onChange={(e) =>
                      dispatch({
                        task: "editMain",
                        key: anElement.key,
                        field: "bulletPoint",
                        bulletPointId: aBullet.key,
                        value: e.target.value,
                      })
                    }
                  ></input>
                </li>
              ))}
            </ul>
          </React.Fragment>
        );
      })}
    </>
  );
}
