import { useState, useCallback } from "react";

export const useResult = () => {
  const [result, setResult] = useState<string | number | null>(null);

  const updateResult = useCallback((value: string | number | null) => {
    setResult(value);
  }, []);

  return [result, updateResult] as const;
};
