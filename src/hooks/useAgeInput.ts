import { useState } from "react";

const useAgeInput = () => {
  const [age, setAge] = useState<number | null>(null);

  const updateAge = (value: number | null) => {
    setAge(value);
  };

  const getAgeText = () => {
    return age !== null ? `만 ${age}세` : "만";
  };

  return { age, updateAge, getAgeText };
};

export default useAgeInput;
