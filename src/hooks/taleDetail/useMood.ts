// hooks/useMood.ts
import { moodElements } from "@utils/defaultData";
import useElementState from "./useElementState";

const useMood = () => {
  return useElementState(moodElements);
};

export default useMood;
