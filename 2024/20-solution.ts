export type AnalyzeScope<
  Code extends string,
  Declared extends string[] = [],
  Used extends string[] = []
> = Code extends `${infer Statement extends string};${infer Rest}`
  ? Statement extends `${string}${
      | "let"
      | "const"
      | "var"} ${infer VariableName} ${string}`
    ? AnalyzeScope<Rest, [...Declared, VariableName], Used>
    : Statement extends `${string}(${infer VariableReference})`
    ? AnalyzeScope<Rest, Declared, [...Used, VariableReference]>
    : never
  : {
      declared: Declared;
      used: Used;
    };

type AnalyzeLine<
  Line extends string,
  Declared extends string[] = [],
  Used extends string[] = []
> = Line extends `${string}${
  | "let"
  | "const"
  | "var"} ${infer VariableName} ${string}`
  ? {
      declared: [...Declared, VariableName];
      used: Used;
    }
  : Line extends `${string}(${infer VariableReference})`
  ? {
      declared: Declared;
      used: [...Used, VariableReference];
    }
  : never;
