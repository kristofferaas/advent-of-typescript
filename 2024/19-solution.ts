export type Parse<
  Code extends string,
  Stack extends ParseStatement<any>[] = []
> = Code extends `${infer Statement};${infer Rest}`
  ? Parse<Rest, [...Stack, ParseStatement<Statement>]>
  : Stack;

type ParseStatement<Statement extends string> = Statement extends `${string}${
  | "var"
  | "let"
  | "const"} ${infer VariableName} = ${infer _}`
  ? {
      id: VariableName;
      type: "VariableDeclaration";
    }
  : Statement extends `${string}(${infer Argument})`
  ? {
      argument: Argument;
      type: "CallExpression";
    }
  : never;
