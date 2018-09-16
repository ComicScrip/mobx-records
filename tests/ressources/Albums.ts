import {Collection, Record} from '../../src'
import {computed, observable} from 'mobx'
import {association, attribute} from '../../src/decorators'
import {Band, BandAttributes} from './Bands'
import {BaseModelAttributes} from './Base'
import bandCollection from './Bands'
import trackCollection, {Track, TrackAttributes} from './Tracks'

export interface AlbumAttributes extends BaseModelAttributes {
  name: string
  tracks: Array<TrackAttributes>
  band: BandAttributes,
  coverUrl: string
}

export class Album extends Record implements AlbumAttributes {
  @observable @attribute id: number
  @observable @attribute coverUrl: string
  @observable @attribute name: string
  @observable @association(bandCollection) band: Band
  @observable @association(trackCollection) tracks: Array<Track>

  @computed get duration() {
    return this.tracks.map(track => track.duration)
    .reduce((acc, current) => acc + current , 0)
  }
}

export class AlbumCollection extends Collection<Album> {

}

export default new AlbumCollection()