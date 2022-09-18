import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-generator',
  templateUrl: './quiz-generator.component.html',
  styleUrls: ['./quiz-generator.component.scss']
})
export class QuizGeneratorComponent implements OnInit {
  public registerForm!: FormGroup;
  quizQuestion: string = "";
  resize: boolean = false; selectedValue: string = "";
  groupname: string = "one"
  optionsArray: any = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.optionsArray = [];
    this.registerForm = this.formBuilder.group({

      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  optionSelected(item: any) { }
}
