export const createStreetLight = <Colors extends string>(
  colors: Colors[],
  defaultColor: NoInfer<Colors>
) => {
  console.log(colors);
  return defaultColor;
};
