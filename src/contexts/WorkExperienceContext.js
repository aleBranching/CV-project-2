import { createContext, useContext, useReducer } from "react";
import uniqid from "uniqid";
import { useImmerReducer } from "use-immer";

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

function useWorkDataContext() {
  return useContext(dataContext);
}

function useWorkDataDispatch() {
  return useContext(dataReducerContext);
}

let reducer = (draft, action) => {
  switch (action.task) {
    case "editMain":
      return draft.map((anElement) => {
        if (anElement.key === action.key) {
          return {
            ...draft,
            [action.field]: action.value,
            bulletPoint: JSON.stringify(JSON.parse(anElement.bulletPoint)),
          };
        }
        return {
          ...anElement,
          bulletPoint: JSON.stringify(JSON.parse(anElement.bulletPoint)),
        };
      });

    case "addField":
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
