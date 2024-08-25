export const getRandomElement = <T extends { value: string | number | null }>(
  arr: T[]
): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};
