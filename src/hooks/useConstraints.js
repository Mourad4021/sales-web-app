import { useReducer } from "react";

const initialConstraintsState = (constraints) =>
  Object.fromEntries(constraints.map(({ name }) => [name, false]));

const constraintsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COST":
      return {
        ...state,
        cost: !state.cost,
        scope: state.cost ? false : state.scope,
        time: !state.cost ? true : state.time,
      };
    case "TOGGLE_SCOPE":
      return {
        ...state,
        scope: !state.scope,
        cost: !state.scope ? true : state.cost,
        time: state.scope ? false : state.time,
      };
    case "TOGGLE_TIME":
      return {
        ...state,
        time: !state.time,
        scope: !state.time,
      };
    default:
      return state;
  }
};
export default function useConstraints(constraints) {
  const CONSTRAINTS_TYPES = Object.fromEntries(
    constraints.map(({ name }) => [name, `TOGGLE_${name.toUpperCase()}`]),
  );
  const [constraintsState, dispatch] = useReducer(
    constraintsReducer,
    initialConstraintsState(constraints),
  );

  const toggle = (name) => () => {
    dispatch({
      type: CONSTRAINTS_TYPES[name],
    });
  };
  return { constraintsState, toggle };
}
