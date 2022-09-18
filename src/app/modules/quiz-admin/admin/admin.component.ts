import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayBasic: boolean = false;
  displayQuizType: boolean = true;
  Header: any = "Create a quiz";
  typeOfQuizSelected: any = [];
  HeaderForType: any = "Select Type for quiz";
  typeOfQuiz: any = [];
  subjectList: any = [];
  items: any;
  nameOfQuiz: string = "";
  constructor(private quizService: QuizServiceService) { }

  ngOnInit(): void {
    this.typeOfQuiz = [
      { type: "MCQ", isSelected: false, icon: "pi pi-check-square" },
      { type: "Fill Ups", isSelected: false, icon: "pi pi-minus" },
      { type: "Reorder", isSelected: false, icon: "pi pi-sort-amount-up" },
      { type: "True/False", isSelected: false, icon: "pi pi-question" },
    ]
  }
  handleClick(event: any) {
    this.displayBasic = true;
    this.quizService.getCategory().subscribe(
      data => {
        this.items = data.data;
        this.items.forEach((temp: any, i: number) => {
          temp.isSelected = false;
        })
      });

  }
  nextClicked(event: any) {
    // send this data
    if (this.nameOfQuiz != "" && this.subjectList.length > 0) {
      var send_data = [{ name: this.nameOfQuiz, subjects: this.subjectList }]
      this.displayBasic = false;
      this.displayQuizType = true;
    }
  }
  typeSelected(event: any) {
    this.typeOfQuizSelected = event;
    event.isSelected = true;
    this.typeOfQuiz.forEach((temp: any, i: number) => {
      if (event.type != temp.type) {
        temp.isSelected = false;
      }
    });
  }
  onTagSelected(val: any) {
    if (val.isSelected == false) {
      this.subjectList.push(val)
      val.isSelected = true
    }
    else {

      val.isSelected = false;
      this.subjectList.forEach((temp: any, i: number) => {
        if (temp.categoryname == val.categoryname) {
          this.subjectList.splice(i, 1)
        }
      })
    }
  }
}
