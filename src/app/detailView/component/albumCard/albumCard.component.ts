import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../model/album.model';
import { Artist } from '../../../mainView/model/artist.model';

@Component({
  selector: 'app-album-card',
  templateUrl: 'albumCard.component.html',
  styleUrls: ['albumCard.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  @Input() album: Album;

  constructor() {}

  ngOnInit() {}
}
