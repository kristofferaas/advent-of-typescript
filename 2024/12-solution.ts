type NaughtyOrNice<TName extends string> = TName extends "Liam" | "Aala"
  ? "naughty"
  : "nice";

export type FormatNames<TList extends [string, string, string][]> = {
  [K in keyof TList]: TList[K] extends [
    infer Name extends string,
    string,
    infer Count
  ]
    ? {
        name: Name;
        count: Count extends `${infer CountNum extends number}`
          ? CountNum
          : never;
        rating: NaughtyOrNice<Name>;
      }
    : never;
};
