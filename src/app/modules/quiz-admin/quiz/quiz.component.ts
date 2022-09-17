import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { optionsData, quizData } from '../quiz/quiz.model'
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  Question: string = "";
  options: any = [];
  tempQuizData: any = [];
  quizIterator: number = 0;
  counter: number = 0;
  timeout: any;
  timer_on = 0;
  selectedData: any = [];
  score: number = 0;
  isQuizCompleted: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.tempQuizData = [
      {
        userId: "1",
        quizId: "1",
        question:
          [
            {
              questionId: "001", questions: "The concept of gravity was discovered by which famous physicist?", correctAnswer: "2",

              options:
                [
                  { optionId: "1", option: "1", isSelected: false },
                  { optionId: "2", option: "2", isSelected: false },
                  { optionId: "3", option: "3", isSelected: false },
                  { optionId: "4", option: "4", isSelected: false },
                ]
            }, {
              questionId: "002", questions: "3+2=?", correctAnswer: "5",

              options:
                [
                  { optionId: "1", option: "5", isSelected: false },
                  { optionId: "2", option: "2", isSelected: false },
                  { optionId: "3", option: "3", isSelected: false },
                  { optionId: "4", option: "4", isSelected: false },
                ]
            }, {
              questionId: "003", questions: "5-2=?", correctAnswer: "3",

              options:
                [
                  { optionId: "1", option: "1", isSelected: false },
                  { optionId: "2", option: "2", isSelected: false },
                  { optionId: "3", option: "3", isSelected: false },
                  { optionId: "4", option: "4", isSelected: false },
                ]
            }
          ]
      },]

    console.log(this.tempQuizData);
    this.loadQuizData();
    this.timedCount();
  };
  loadQuizData() {
    var quizData = this.tempQuizData[0].question;
    quizData[this.quizIterator].options.forEach((temp: any, i: number) => {
      temp.isSelected = false;
    })
    this.Question = quizData[this.quizIterator].questions;
    this.options = quizData[this.quizIterator].options;
    this.quizIterator++;
  }

  optionSelected(item: any) {
    this.selectedData = item;
    let optionsObj = new optionsData();
    optionsObj = item;
    optionsObj.isSelected = true;
    var quizData = this.tempQuizData[0].question;
    this.options.forEach((temp: any, i: number) => {
      if (item.optionId != temp.optionId) { temp.isSelected = false; }

    })

  }

  timedCount() {
    if (this.counter < 2) {
      this.counter++;
      setTimeout(() => {
        this.timedCount();
      }, 1000)

    } else {
      this.counter = 0;
      this.calculteScore();
    }
  }
  calculteScore() {
    var quizData = this.tempQuizData[0].question;
    if (quizData[this.quizIterator - 1].correctAnswer == this.selectedData.option) {
      ++this.score;
    }

    if (this.quizIterator < quizData.length) {
      this.loadQuizData();
      this.timedCount();
    } else {
      this.saveData();
    }

  }

  saveData() {
    this.score;
    console.log("score :" + this.score)
    this.isQuizCompleted = true;
    this.tempQuizData;
  }

}
