import { createContext, useContext, useReducer } from "react";
import uniqid from "uniqid";

let detailsContext = createContext(null);
let detailsReducerContext = createContext(null);

export default function EducationContext({ children }) {
  let [state, dispatch] = useReducer(reducer, initialData.education);

  return (
    <detailsContext.Provider value={state}>
      <detailsReducerContext.Provider value={dispatch}>
        {children}
      </detailsReducerContext.Provider>
    </detailsContext.Provider>
  );
}

export function useDetails() {
  return useContext(detailsContext);
}

export function useDetailsReducer() {
  return useContext(detailsReducerContext);
}

let reducer = (state, action) => {
  switch (action.task) {
    case "edit":
      console.log("the state", state);
      return state.map((elememt) =>
        elememt.key === action.key
          ? { ...elememt, [action.field]: action.value }
          : { ...elememt }
      );
    case "add":
      return [
        ...state,
        {
          key: uniqid(),
          educationTitle: "",
          startDate: "",
          finishDate: "",
          additionalInfo: "",
        },
      ];

    case "delete":
      return state.filter((anElement) => anElement.key !== action.id);

    default:
      return { state };
  }
};

let initialData = {
  education: [
    {
      key: uniqid(),
      educationTitle: "University of somethong",
      startDate: "2021-02-01",
      finishDate: "2023-02-01",
      additionalInfo: "Got an attendance award",
    },
  ],
};
