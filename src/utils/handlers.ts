export const triggerByKeyboard = (event: any, fn: any) => {
  if (event.key === " " || event.key === "Enter") {
    fn();
  }
};
