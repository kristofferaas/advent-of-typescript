export const createRoute = <TRoute>(author: string, route: TRoute): TRoute => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route;
};
