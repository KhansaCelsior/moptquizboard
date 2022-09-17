import { Component, OnInit } from '@angular/core';
import { leaderBoard } from './leaderboard.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  tempLeaderboardData: any = [];
  columnsLeaderboard: any = [];
  constructor() { }

  ngOnInit(): void {
    this.loadTableData()
  }

  loadTableData() {
    var leaderboardObj = new leaderBoard();
    this.columnsLeaderboard = [
      { header: 'User Name', field: 'userName' },
      { header: 'Score', field: 'score' },
    ]
    this.tempLeaderboardData = [{
      userId: 1,
      quizId: 1,
      score: 3,
      userName: "Arpi"
    },
    {
      userId: 2,
      quizId: 1,
      score: 3,
      userName: "Prakash"
    },
    {
      userId: 3,
      quizId: 1,
      score: 3,
      userName: "Vanaja"
    },
    {
      userId: 4,
      quizId: 1,
      score: 3,
      userName: "Khansa"
    }
    ]
  }

}
