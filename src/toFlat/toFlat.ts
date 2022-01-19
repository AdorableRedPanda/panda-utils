import { FlatPresentation, Leaf, Path, PathObject } from '../types';
import { isLeaf } from '../isLeaf';

type Object<T> = PathObject<T> | Leaf<T>;

const tailedFlat = <T>(prevPath: Path, target: Object<T>): FlatPresentation<T> => {
    if (isLeaf(target)) {
        return [prevPath, target];
    }

    const [segment, next] = Object.entries(target)[0];
    return tailedFlat([...prevPath, segment], next as Object<T>);
};

export const toFlat = <T>(target: PathObject<T> | T): FlatPresentation<T> => tailedFlat([], target);
