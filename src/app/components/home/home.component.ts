import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models/Game';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  sort: string;
  games: Array<Game>;
  gameSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string) {
    this.gameSubscription = this.httpService.getGameList(sort, search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(this.games)
    })
  }

  ngOnDestroy() {
    this.gameSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
