import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from 'src/app/mainView/model/artist.model';
import { Album } from 'src/app/detailView/model/album.model';
import { forkJoin, Observable } from 'rxjs';
import { DetailArtist } from 'src/app/detailView/model/detailArtist.model';
import { Track } from 'src/app/detailView/model/track.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class LastfmAPIService {
  LASTFM_URL = 'https://ws.audioscrobbler.com/2.0/';
  LIMIT_PER_PAGE_TOP_ARTISTS = 10;
  LIMIT_PER_PAGE_TOP_ALBUMS = 5;
  LIMIT_PER_PAGE_TOP_TRACKS = 5;
  LIMIT_PER_PAGE_SEARCH_ARTIST = 10;

  lastfmKey = environment.lastfmKey;

  constructor(private http: HttpClient) {}

  getTopArtists(country: string): Promise<Artist[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          `${this.LASTFM_URL}?method=geo.gettopartists&limit=${this.LIMIT_PER_PAGE_TOP_ARTISTS}&country=${country}&api_key=${this.lastfmKey}&format=json`
        )
        .subscribe(
          (res: any) => {
            const artists: Artist[] = [];
            res.topartists.artist.map((artist) => {
              artists.push(
                new Artist(
                  artist.image[1]['#text'],
                  +artist.listeners,
                  artist.mbid,
                  artist.name
                )
              );
            });
            resolve(artists);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getDetailArtist(mbid: string): Promise<DetailArtist> {
    return new Promise((resolve, reject) => {
      forkJoin([
        this.getTopTracks(mbid),
        this.getTopAlbums(mbid),
        this.getArtist(mbid),
      ]).subscribe(
        (res: any) => {
          const topTracks: Track[] = [];
          res[0].toptracks.track.map((track) => {
            topTracks.push(
              new Track(
                track.mbid,
                track.image[1]['#text'],
                track.name,
                track.playcount
              )
            );
          });

          const topAlbums: Album[] = [];
          res[1].topalbums.album.map((album) => {
            topAlbums.push(
              new Album(
                album.mbid,
                album.image[3]['#text'],
                album.name,
                album.playcount
              )
            );
          });

          const detailArtist = new DetailArtist(
            res[2].artist.name,
            res[2].artist.image[2]['#text'],
            +res[2].artist.stats.listeners,
            +res[2].artist.stats.playcount,
            topTracks,
            topAlbums
          );
          resolve(detailArtist);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  private getArtist(mbid: string): Observable<Object> {
    return this.http.get(
      `${this.LASTFM_URL}?method=artist.getinfo&mbid=${mbid}&api_key=${this.lastfmKey}&format=json`
    );
  }

  private getTopAlbums(mbid: string): Observable<Object> {
    return this.http.get(
      `${this.LASTFM_URL}?method=artist.gettopalbums&mbid=${mbid}&limit=${this.LIMIT_PER_PAGE_TOP_ALBUMS}&api_key=${this.lastfmKey}&format=json`
    );
  }

  private getTopTracks(mbid: string): Observable<Object> {
    return this.http.get(
      `${this.LASTFM_URL}?method=artist.gettoptracks&mbid=${mbid}&limit=${this.LIMIT_PER_PAGE_TOP_TRACKS}&api_key=${this.lastfmKey}&format=json`
    );
  }
}
