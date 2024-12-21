export type GetRoute<
  Route extends string,
  Result extends [string, number][] = [],
  Dashes extends string[] = [],
  From extends string = ""
> = Route extends `${infer First}-${infer Rest}`
  ? From extends ""
    ? GetRoute<
        Rest,
        First extends "" ? Result : [[First, 0]],
        First extends "" ? [...Dashes, "-"] : ["-"],
        First extends "" ? From : First
      >
    : GetRoute<
        Rest,
        First extends "" ? Result : [...Result, [First, Dashes["length"]]],
        First extends "" ? [...Dashes, "-"] : ["-"],
        First extends "" ? From : First
      >
  : Route extends ""
  ? Result
  : [...Result, [Route, Dashes["length"]]];
