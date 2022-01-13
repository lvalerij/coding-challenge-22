import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../model/track.model';

@Component({
  selector: 'app-track-card',
  templateUrl: 'trackCard.component.html',
  styleUrls: ['trackCard.component.scss'],
})
export class TrackCardComponent implements OnInit {
  @Input() track: Track;

  constructor() {}

  ngOnInit() {}
}
