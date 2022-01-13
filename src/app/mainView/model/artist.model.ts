export class Artist {
  image: string;
  listeners: number;
  mbid: string;
  name: string;


  constructor(
    image: string,
    listeners: number,
    mbid: string,
    name: string
  ){
    this.image = image;
    this.listeners = listeners;
    this.mbid = mbid;
    this.name = name;
  }
}
