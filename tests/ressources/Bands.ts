import {Collection, Record} from '../../src'
import {observable} from 'mobx'
import {BaseModelAttributes} from './Base'
import {Artist, ArtistAttributes} from './Artists'
import {association, attribute} from '../../src/decorators'
import artistCollection from './Artists'

export interface BandAttributes extends BaseModelAttributes {
  name: string
  members: Array<ArtistAttributes>,
}

export class Band extends Record implements BandAttributes {
  @observable @attribute id: number
  @observable @attribute name: string = ''
  @observable @association(artistCollection) members: Array<Artist>
}

export class BandCollection extends Collection<Band> {

}

export default new BandCollection()