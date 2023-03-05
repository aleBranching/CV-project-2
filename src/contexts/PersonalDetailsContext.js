import { createContext, useContext, useReducer } from "react";

let detailsContext = createContext(null);
let detailsReducerContext = createContext(null);

export default function PersonalDetailsContext({ children }) {
  let [state, dispatch] = useReducer(reducer, initialData.personalDetails);

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
      return { ...state, [action.field]: action.value };
    default:
      return { state };
  }
};

let initialData = {
  personalDetails: {
    name: "John doe",
    email: "gaegaeg@gmail.com",
    phoneNumber: "+11111111",
    personalStatement: "this is a personal statement and it is good",
  },
};
