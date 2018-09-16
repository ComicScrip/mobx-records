import {Collection, Record} from '../../src'
import {observable} from 'mobx'
import {BaseModelAttributes} from './Base'
import {attribute} from '../../src/decorators'

export interface TrackAttributes extends BaseModelAttributes {
  name: string
  duration: number
}

export class Track extends Record implements TrackAttributes {
  @observable @attribute id: number
  @observable @attribute duration: number = 0
  @observable @attribute name: string = ''
}

class TracksCollection extends Collection<Track> {

}

export default new TracksCollection()


