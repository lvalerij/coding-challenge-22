export class Track {
  mbid: string;
  image: string;
  title: string;
  playsCount: string;

  constructor(
    mbid: string,
    image: string,
    title: string,
    playsCount: string
  ){
    this.mbid = mbid;
    this.image = image;
    this.title = title;
    this.playsCount = playsCount;
  }
}
