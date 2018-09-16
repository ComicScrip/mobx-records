import { Record } from "./Record"

export type OptimisticPrimaryKey = string
export type PrimaryKey = number | OptimisticPrimaryKey

export interface RecordConstructor {
  new (): Record
}

export interface RecordConfig {
  progressDebounceMs: number
}
