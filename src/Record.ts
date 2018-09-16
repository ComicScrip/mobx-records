import {computed} from 'mobx'
import {Collection} from './Collection'
import {uniqueId, keys, forEach} from 'lodash'
import {OptimisticPrimaryKey} from './types'

export class Record {
  public optimisticPrimaryKey: OptimisticPrimaryKey = uniqueId('i_')
  public collection: Collection<Record> | null = null

  public get attributesNames(): string[] {
    const c = this.constructor as any
    return c._attributes || []
  }

  @computed public get attributes(): object {
    const attributesObject = {}
    forEach(this.attributesNames, (a:string) => {
      attributesObject[a] = this[a]
    })
    return attributesObject
  }

  public get associations(): object {
    const c = this.constructor as any
    return c._associations || {}
  }

  public get associationsNames(): string[] {
    return keys(this.associations)
  }
}
