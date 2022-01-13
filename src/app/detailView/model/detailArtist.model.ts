import { Album } from './album.model';
import { Track } from './track.model';

export class DetailArtist {
  name: string;
  image: string;
  listeners: number;
  playCount: number;
  topTracks: Track[];
  topAlbums: Album[];

  constructor(
    name: string,
    image: string,
    listeners: number,
    playCount: number,
    topTracks: Track[],
    topAlbums: Album[]
  ){
    this.name = name;
    this.image = image;
    this.listeners = listeners;
    this.playCount = playCount;
    this.topTracks = topTracks;
    this.topAlbums = topAlbums;
  }
}
