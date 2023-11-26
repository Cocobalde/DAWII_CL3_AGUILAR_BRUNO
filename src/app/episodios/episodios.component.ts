import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Episode {
  id: number;
  name: string;
}

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {
  episodes: Episode[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.http.get<any>('https://rickandmortyapi.com/api/episode')
      .subscribe(data => {
        this.episodes = data.results.filter((episode: Episode) => episode.id % 2 !== 0);
      });
  }
}
