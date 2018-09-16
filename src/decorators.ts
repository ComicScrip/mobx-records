import { isArray, isObject } from "lodash"
import { Record } from "./Record"
import { Collection } from "./Collection"

export function attribute(target: any, key: string) {
  if (!isArray(target.constructor._attributes)) {
    target.constructor._attributes = []
  }
  target.constructor._attributes.push(key)
}

export function association(collection?: Collection<Record>) {
  return (target: any, key: string) => {
    if (!isObject(target.constructor._associations)) {
      target.constructor._associations = {}
    }
    target.constructor._associations[key] = { collection }
  }
}
