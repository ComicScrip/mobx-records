import {Collection, Record} from '../../src'
import {computed, observable} from 'mobx'
import {BaseModelAttributes} from './Base'
import {attribute} from '../../src/decorators'

export interface ArtistAttributes extends BaseModelAttributes {
  firstName: string,
  lastName: string,
  birthDate?: string,
  bio?: string
}

export class Artist extends Record implements ArtistAttributes {
  @observable @attribute id: number
  @observable @attribute bio: string = 'No bio for this artist yet'
  @observable @attribute birthDate: string
  @observable @attribute firstName: string = ''
  @observable @attribute lastName: string = ''

  @computed public get fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

export class ArtistCollection extends Collection<Artist> {

}

export default new ArtistCollection()