// hooks/useElementState.ts
import { useResult } from "@hooks/useResult";
import { getRandomElement } from "@utils/getRandom";

const useElementState = (elements: any[]) => {
  const [state, setState] = useResult();

  // 기본적으로 랜덤 요소 값을 반환
  const getDefaultElement = () => {
    return state || getRandomElement(elements).value;
  };

  return { state, setState, getDefaultElement };
};

export default useElementState;
