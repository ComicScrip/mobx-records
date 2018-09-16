import { Collection } from './Collection';
import { OptimisticPrimaryKey } from './types';
export declare class Record {
    optimisticPrimaryKey: OptimisticPrimaryKey;
    collection: Collection<Record> | null;
    readonly attributesNames: string[];
    readonly attributes: object;
    readonly associations: object;
    readonly associationsNames: string[];
}
