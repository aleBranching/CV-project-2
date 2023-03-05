import { createContext, useContext, useReducer } from "react";
import uniqid from "uniqid";
import { useImmerReducer } from "use-immer";
import { original } from "immer";

let dataContext = createContext(null);
let dataReducerContext = createContext(null);

export default function WorkExperienceContext({ children }) {
  let [state, dispatch] = useImmerReducer(reducer, initialData);

  return (
    <dataContext.Provider value={state}>
      <dataReducerContext.Provider value={dispatch}>
        {children}
      </dataReducerContext.Provider>
    </dataContext.Provider>
  );
}

export function useWorkDataContext() {
  return useContext(dataContext);
}

export function useWorkDataDispatch() {
  return useContext(dataReducerContext);
}

let reducer = (draft, action) => {
  switch (action.task) {
    case "editMain":
      return draft.map((anElement) => {
        if (anElement.key === action.key && action.field === "bulletPoint") {
          console.log("here", original(anElement));
          return {
            ...original(anElement),

            bulletPoint: anElement.bulletPoint.map((aBullet) => {
              console.log("bullet data key", aBullet.key);
              console.log("bullet dispach key", action.bulletPointId);
              console.log("test", original(aBullet));

              if (aBullet.key === action.bulletPointId) {
                return { ...original(aBullet), bullet: action.value };
              }

              return { ...original(aBullet) };
            }),
          };
        }
        if (anElement.key === action.key) {
          //   console.log("test", original(anElement));
          //   console.log("here")
          return {
            ...original(anElement),
            [action.field]: action.value,
            bulletPoint: anElement.bulletPoint.map((aBullet) => {
              return { ...original(aBullet) };
            }),
          };
        }
        return {
          ...anElement,
          bulletPoint: anElement.bulletPoint.map((aBullet) => {
            return { ...aBullet };
          }),
        };
      });

    case "addWorkExperience":
      draft.push({
        key: uniqid(),
        workTitle: "",
        startDate: "",
        finishDate: "",
        bulletPoint: [
          { key: uniqid(), bullet: "did this for this amount of time" },
        ],
      });
      break;
    case "deleteWorkExperience":
      let index = draft.findIndex((anElement) => anElement.key === action.key);
      draft.splice(index, 1);
      break;
    case "deleteBullet":
      // action fields: key, bulletKey
      let parentIndex = draft.findIndex(
        (anElement) => anElement.key === action.key
      );
      let bulletIndex = draft[parentIndex].bulletPoint.findIndex(
        (anElement) => anElement.key === action.bulletKey
      );
      draft[parentIndex].bulletPoint.splice(bulletIndex, 1);
      break;
    case "addBullet":
      let parentIndex2 = draft.findIndex(
        (anElement) => anElement.key === action.key
      );
      draft[parentIndex2].bulletPoint.push({ key: uniqid(), bullet: "" });
      break;
    default:
      console.error("a case has not been called prroperly");
      return draft.map((anElement) => {
        return {
          ...anElement,
          bulletPoint: JSON.stringify(JSON.parse(anElement.bulletPoint)),
        };
      });
  }
};

let initialData = [
  {
    key: uniqid(),
    workTitle: "Chef at something something",
    startDate: "2021-01-12",
    finishDate: "2021-12-12",
    bulletPoint: [
      { key: uniqid(), bullet: "did this for this amount of time" },
    ],
  },
];
