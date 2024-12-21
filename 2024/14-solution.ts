export type PerfReview<T> = T extends AsyncGenerator<infer TReturn>
  ? TReturn
  : never;
