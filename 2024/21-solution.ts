export type Lint<
  Code extends string,
  Declared extends string[] = [],
  Used extends string[] = []
> = Code extends `${infer Statement};${infer Rest}`
  ? Statement extends `${string}${
      | "let"
      | "var"
      | "const"} ${infer VariableName} = ${string}`
    ? Lint<Rest, [...Declared, VariableName], Used>
    : Statement extends `${string}(${infer VariableReference})${string}`
    ? Lint<Rest, Declared, [...Used, VariableReference]>
    : never
  : {
      scope: {
        declared: Declared;
        used: Used;
      };
      unused: Exclude<Declared[number], Used[number]> extends never
        ? []
        : [Exclude<Declared[number], Used[number]>];
    };
