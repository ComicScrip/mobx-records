import { Record } from './Record';
import { Collection } from './Collection';
export declare function attribute(target: any, key: string): void;
export declare function association(collection?: Collection<Record>): (target: any, key: string) => void;
