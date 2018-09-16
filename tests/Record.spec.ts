import { Album, AlbumAttributes, AlbumCollection } from "./ressources/Albums"
import { Track } from "./ressources/Tracks"
import { Record } from "../src"
import BandCollection from "./ressources/Bands"
import TrackCollection from "./ressources/Tracks"

describe("Record", () => {
  let albumCollection: AlbumCollection
  let album: Album
  let rawAlbum: AlbumAttributes

  beforeEach(() => {
    rawAlbum = {
      id: 1,
      name: "Foxtrot",
      tracks: [
        { id: 11, name: "Watcher of the skies", duration: 443 },
        { id: 22, name: "Time table", duration: 286 },
        { id: 33, name: "Horizons", duration: 101 }
      ],
      band: {
        id: 123,
        name: "Genesis",
        members: [
          {
            id: 1,
            firstName: "Peter",
            lastName: "Gabriel",
            birthDate: "1950-02-13"
          },
          {
            id: 2,
            firstName: "Banks",
            lastName: "Tony",
            birthDate: "1950-03-27"
          },
          {
            id: 3,
            firstName: "Rutherford",
            lastName: "Mike",
            birthDate: "1950-10-02"
          },
          {
            id: 4,
            firstName: "Hackett",
            lastName: "Steve",
            birthDate: "1950-02-12"
          },
          {
            id: 5,
            firstName: "Collins",
            lastName: "Phil",
            birthDate: "1951-01-30"
          }
        ]
      },
      coverUrl:
        "https://moonunderwaterblog.files.wordpress.com/2016/07/genesis-foxtrot-lp.jpg"
    }
    albumCollection = new AlbumCollection()
    album = new Album()
  })

  describe("pseudo-refelection methods", () => {
    it("# get attributesNames", () => {
      const baseRecord = new Record()
      expect(baseRecord.attributesNames).toEqual([])

      const albumAttributeNames = ["id", "name", "coverUrl"]
      expect(album.attributesNames.length).toEqual(albumAttributeNames.length)
      albumAttributeNames.forEach(n =>
        expect(album.attributesNames).toContain(n)
      )

      const track = new Track()
      const trackAttributeNames = ["id", "name", "duration"]
      expect(track.attributesNames.length).toEqual(trackAttributeNames.length)
      trackAttributeNames.forEach(n =>
        expect(track.attributesNames).toContain(n)
      )
    })

    it("# get attributes", () => {
      const albumAttributes = {
        id: 1,
        name: "Foxtrot",
        coverUrl:
          "https://moonunderwaterblog.files.wordpress.com/2016/07/genesis-foxtrot-lp.jpg"
      }
      album.name = albumAttributes.name
      album.id = albumAttributes.id
      album.coverUrl = albumAttributes.coverUrl
      expect(album.attributes).toEqual(albumAttributes)
    })

    it("# get associationsNames", () => {
      const albumAssociationsNames = ["tracks", "band"]
      expect(album.associationsNames.length).toEqual(
        albumAssociationsNames.length
      )
      albumAssociationsNames.forEach(n =>
        expect(album.associationsNames).toContain(n)
      )
    })

    it("# get associations", () => {
      const baseRecord = new Record()
      expect(baseRecord.associations).toEqual({})

      const albumAssociationsNames = ["tracks", "band"]
      expect(album.associations).toEqual({
        band: { collection: BandCollection },
        tracks: { collection: TrackCollection }
      })
      albumAssociationsNames.forEach(n =>
        expect(album.associationsNames).toContain(n)
      )
    })
  })
})
