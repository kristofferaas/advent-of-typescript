export declare function DynamicParamsCurrying<
  Fn extends (...args: any[]) => any
>(fn: Fn): CurriedFunction<Parameters<Fn>, ReturnType<Fn>>;

type CurriedFunction<Args extends any[], Return> = <T extends Partial<Args>>(
  ...args: T
) => T["length"] extends Args["length"]
  ? Return
  : T["length"] extends number
  ? CurriedFunction<OmitFirstArguments<Args, T["length"]>, Return>
  : never;

type OmitFirstArguments<
  Args extends any[],
  Count extends number,
  Acc extends any[] = []
> = Acc["length"] extends Count
  ? Args
  : Args extends [infer _, ...infer Rest]
  ? OmitFirstArguments<Rest, Count, [...Acc, 1]>
  : never;
