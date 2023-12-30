import IArtists from "./IArtists";
import IImages from "./IImages";
import ITracks from './ITracks';

export default interface IAlbums {
    artists: IArtists[],
    images: IImages[],
    tracks: ITracks[],
    album_type: string
}