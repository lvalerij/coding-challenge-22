import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastfmAPIService } from 'src/app/shared/services/lastfmAPI.service';
import { DetailArtist } from '../../model/detailArtist.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: 'detailView.component.html',
})
export class DetailViewComponent implements OnInit {
  detailArtist: DetailArtist;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    public lastfmAPIService: LastfmAPIService
  ) {
    const id = route.snapshot.params['id'];
    this.getDetailArtist(id);
  }

  ngOnInit() {}

  private getDetailArtist(id: string) {
    this.lastfmAPIService.getDetailArtist(id).then((detailArtist) => {
      this.detailArtist = detailArtist;
      this.isLoading = false;
    });
  }
}
