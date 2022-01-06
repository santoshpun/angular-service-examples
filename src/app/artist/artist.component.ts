import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public artists = [];

  constructor(private service: ArtistService) { }

  ngOnInit() {
    this.artists = this.service.getAllArtists();
  }

}
