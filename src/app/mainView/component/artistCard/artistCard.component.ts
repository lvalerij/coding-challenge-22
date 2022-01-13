import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../model/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: 'artistCard.component.html',
  styleUrls: ['artistCard.component.scss'],
})
export class ArtistCardComponent implements OnInit {
  @Input() artist: Artist;

  constructor() {}

  ngOnInit() {}
}
