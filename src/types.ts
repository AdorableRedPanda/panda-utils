export type Path = string[];

export type Leaf<T> = T;

export type MergeResult<F, S> = S | S & F;

export type PathObject<T> = { [key: string]: PathObject<T> | Leaf<T> };

export type FlatPresentation<T> = [Path, Leaf<T>];