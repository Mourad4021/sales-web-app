import { useState } from "react";

export default function useCondition() {
  const [condition, setConditionState] = useState();
  const setCondition = (event) => {
    setConditionState(event.target.value);
  };
  return [condition, setCondition];
}
