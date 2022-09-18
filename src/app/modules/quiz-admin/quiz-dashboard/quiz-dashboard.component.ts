import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-quiz-dashboard',
  templateUrl: './quiz-dashboard.component.html',
  styleUrls: ['./quiz-dashboard.component.scss'],
})
export class QuizDashboardComponent implements OnInit {
  tempData: any = [];
  linkGenerated: boolean = false;
  constructor(
    private router: Router,
    private quizServiceService: QuizServiceService,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  onEditClicked(item: any) {
    this.router.navigate(['/quizGenerator']);
  }
  onDeleteClicked(item: any) {
    if (confirm('sure you wanna delete?') == true) {
      this.tempData.forEach((temp: any, i: number) => {
        if (temp.questionId == item.questionId) {
          this.tempData.splice(i, 1);
        }
      });
    }
  }

  createLink() {
    this.linkGenerated = true;
  }
  loadDashboardData() {
    const getQuizId = this.tokenService.getQuiz();
    console.log('getQuizId: ', getQuizId);
    this.quizServiceService.getQuestion(getQuizId.quizid).subscribe({
      next: (data) => {
        this.tempData = data.data;
        console.log('this.tempData: ', this.tempData);
        this.router.navigate(['/quizDashboard']);
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }
}
