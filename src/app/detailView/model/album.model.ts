export class Album {
  mbid: string;
  image: string;
  title: string;
  playsCount: number;

  constructor(
    mbid: string,
    image: string,
    title: string,
    playsCount: number
  ){
    this.mbid = mbid;
    this.image = image;
    this.title = title;
    this.playsCount = playsCount;
  }
}
