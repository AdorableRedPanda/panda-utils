type Leaf<T> = T;

export type PathObject<T> = { [key: string]: PathObject<T> | Leaf<T> }