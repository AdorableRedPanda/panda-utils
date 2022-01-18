export type Path = string[];

export type Leaf<T> = T;

export type MergeResult<F, S> = S | S & F;

export type PathObject<T> = { [key: string]: PathObject<T> | Leaf<T> };

// export type CreatePathObject<T> = (leafValue: T, path: Path) => PathObject<T>;
//
// export type NaiveClone<T> = (value: T) => T;
//
// export type DeepMerge<T, Q> = (first: T, second: Q) => MergeResult<T, Q>;
//
// export type GetPathTo<T> = (leafValue: T, nested: PathObject<T> | T) => Path;