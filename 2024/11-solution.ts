export type Excuse<TExcuses extends Record<string, string>> = new (
  excuse: TExcuses
) => keyof TExcuses extends string
  ? `${keyof TExcuses}: ${TExcuses[keyof TExcuses]}`
  : never;
