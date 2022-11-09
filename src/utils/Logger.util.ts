export const logError: (error: Error | string) => void = (error: Error | string): void => {
  return console.error(error);
};
