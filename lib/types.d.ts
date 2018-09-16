import { Record } from './Record';
export declare type OptimisticPrimaryKey = string;
export declare type PrimaryKey = number | OptimisticPrimaryKey;
export interface RecordConstructor {
    new (): Record;
}
export interface RecordConfig {
    progressDebounceMs: number;
}
