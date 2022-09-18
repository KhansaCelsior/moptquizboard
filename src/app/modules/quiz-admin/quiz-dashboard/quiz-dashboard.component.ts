import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-dashboard',
  templateUrl: './quiz-dashboard.component.html',
  styleUrls: ['./quiz-dashboard.component.scss']
})
export class QuizDashboardComponent implements OnInit {
  tempData: any = [];
  linkGenerated: boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  onEditClicked(item: any) {
    this.router.navigate(['/quizGenerator']);
  }
  onDeleteClicked(item: any) {
    if (confirm("sure you wanna delete?") == true) {
      this.tempData.forEach((temp: any, i: number) => {
        if (temp.questionId == item.questionId) {
          this.tempData.splice(i, 1);
        }
      })
    }

  }

  createLink() {
    this.linkGenerated = true;
  }
  loadDashboardData() {
    this.tempData = [
      {
        questionId: "1",
        question: "1+2",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "4",
        correctAnswer: "3"

      },
      {
        questionId: "4",
        question: "1+3",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "4",
        correctAnswer: "4"

      }, {
        questionId: "3",
        question: "1+1",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "4",
        correctAnswer: "2"

      }, {
        questionId: "2",
        question: "1+2+1",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "4",
        correctAnswer: "4"

      }]
  }


}
