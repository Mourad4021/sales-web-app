import { useReducer } from "react";

const initialConstraintsState = (constraints) =>
  Object.fromEntries(constraints.map(({ name }) => [name, false]));

const constraintsReducer = (CONSTRAINTS_TYPES, state, action) => {
  switch (action.type) {
    case CONSTRAINTS_TYPES.cost:
      return {
        ...state,
        cost: !state.cost,
        scope: state.cost ? false : state.scope,
        time: !state.cost ? true : state.time,
      };
    case CONSTRAINTS_TYPES.scope:
      return {
        ...state,
        scope: !state.scope,
        cost: !state.scope ? true : state.cost,
        time: state.scope ? false : state.time,
      };
    case CONSTRAINTS_TYPES.time:
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
    (state, action) => constraintsReducer(CONSTRAINTS_TYPES, state, action),
    initialConstraintsState(constraints),
  );

  const toggle = (name) => () => {
    dispatch({
      type: CONSTRAINTS_TYPES[name],
    });
  };
  return { constraintsState, toggle };
}
