import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  quizLink:string="";
  Header:string="Quiz"
  displayBasic:boolean=false;
  quizData:any=[];
  tempQuizData:any=[];
  constructor(private router: Router) { }
//[{userId:"",quizId:"",question:[{questionId:"",questions:"", options:[{optionId:"",option:""}]]}]

  ngOnInit(): void {
    this.tempQuizData=[
      {Question:"1",Options:[
        {value:"1"},
        {value:"2"},
        {value:"3"},
        {value:"4"},
      ],CorrectAnswer:{value:"4"}},
      {Question:"2",Options:[
        {value:"1"},
        {value:"2"},
        {value:"3"},
        {value:"4"},
      ],CorrectAnswer:{value:"4"}},
    ]
  }
  startQuiz(event:any)
  {
    if(this.quizLink!="")
    { this.displayBasic=true;
      this.quizData=this.tempQuizData;
      this.router.navigate(["/quiz"])
     }

  }
  nextClicked(event:any)
  {}
}
