// hooks/useContents.ts
import { contentElements } from "@utils/defaultData";
import useElementState from "./useElementState";

const useContents = () => {
  return useElementState(contentElements);
};

export default useContents;
