import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayBasic:boolean=false;
  Header:any="Create a quiz";
  subjectList:any=[];
  items:any;
  nameOfQuiz:string="";
  constructor() { }

  ngOnInit(): void {
   
  }
  handleClick(event:any)
  {
    this.displayBasic=true;
    this.items=
   [{subject:"java",selected:false},
   {subject:"selenium",selected:false},
   {subject:"angular",selected:false},
   {subject:"azure",selected:false},
   {subject:"aws",selected:false},
   {subject:"nodejs",selected:false},
   {subject:"git",selected:false},
  ];
  
  }
  nextClicked(event:any)
  {
    this.displayBasic=false;
  }
  onTagSelected(val:any)
  {
    if(val.selected==false)
    {this.subjectList.push(val)
    val.selected=true}
    else{

      val.selected=false;
      this.subjectList.forEach((temp:any,i:number)=>{
        if(temp.subject==val.subject)
        {
          this.subjectList.splice(i,1)
        }
      })
    }
  }
}
