export const compose =
  <A, B, C, Result>(
    f: (input: A) => B,
    g: (input: B) => C,
    h: (input: C) => Result
  ) =>
  (a: A) =>
    h(g(f(a)));

export const upperCase = <T extends string>(x: T) =>
  x.toUpperCase() as Uppercase<T>;
export const lowerCase = <T extends string>(x: T) =>
  x.toLowerCase() as Lowercase<T>;
export const firstChar = <T extends string>(
  x: T
): T extends `${infer First}${infer _}` ? First : never => x[0] as any;
export const firstItem = <T extends any[]>(x: T): T[0] => x[0];
export const makeTuple = <T>(x: T): [T] => [x];
export const makeBox = <T>(value: T): { value: T } => ({ value });
