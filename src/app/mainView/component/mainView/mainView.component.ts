import { Component, OnInit } from '@angular/core';
import { LastfmAPIService } from 'src/app/shared/services/lastfmAPI.service';
import { environment } from 'src/environments/environment';
import { Artist } from '../../model/artist.model';

@Component({
  selector: 'app-main-view',
  templateUrl: 'mainView.component.html',
})
export class MainViewComponent implements OnInit {
  countries = environment.countries;
  artists: Artist[] = [];
  filteredArtists: Artist[];
  isLoading = true;

  constructor(public lastfmAPIService: LastfmAPIService) {
    this.getTopArtists(this.countries[0]);
  }

  ngOnInit() {}

  onCountrySelect(event: any) {
    const selectedCountry = event.target.value;
    this.getTopArtists(selectedCountry);
  }

  onSearchArtist(event: any) {
    const searchText = event.target.value;
    this.filteredArtists = this.artists.filter(
      (artist) =>
        artist.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
  }

  onCancelSearch() {
    this.filteredArtists = this.artists;
  }

  private getTopArtists(selectedCountry: string) {
    this.isLoading = true;
    this.lastfmAPIService.getTopArtists(selectedCountry).then((artists) => {
      this.isLoading = false;
      this.artists = artists;
      this.filteredArtists = artists;
    });
  }
}
