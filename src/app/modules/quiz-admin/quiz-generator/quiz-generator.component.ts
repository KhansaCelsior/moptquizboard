import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { QuizServiceService } from '../quiz-service.service';
import { quizGenerator } from './quizGenerator.model';

@Component({
  selector: 'app-quiz-generator',
  templateUrl: './quiz-generator.component.html',
  styleUrls: ['./quiz-generator.component.scss'],
})
export class QuizGeneratorComponent implements OnInit {
  public registerForm!: FormGroup;
  quizQuestion: string = '';
  resize: boolean = false;
  selectedValue: string = '';
  groupname: string = 'one';
  optionsArray: any = [];
  option1Card: string = '';
  option2Card: string = '';
  option3Card: string = '';
  option4Card: string = '';
  optionRadio: string = '';
  isSaveDisabled: boolean = true;
  correctOption: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private quizServiceService: QuizServiceService,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.optionsArray = [];
  }

  optionSelected(item: any) {}
  onSaveClicked() {
    if (this.quizQuestion != '' && this.optionRadio != '') {
      this.isSaveDisabled = false;

      let val = this.optionRadio;
      switch (val) {
        case 'one':
          this.correctOption = this.option1Card;
          break;
        case 'two':
          this.correctOption = this.option2Card;
          break;
        case 'three':
          this.correctOption = this.option3Card;
          break;
        case 'four':
          this.correctOption = this.option4Card;
          break;
      }
      const getQuizId = this.tokenService.getQuiz();
      console.log('getQuizId: ', getQuizId);
      let obj = new quizGenerator();
      obj.quizid = getQuizId.quizid;
      obj.correctanswer = this.correctOption;
      obj.option1 = this.option1Card;
      obj.option2 = this.option2Card;
      obj.option3 = this.option3Card;
      obj.option4 = this.option3Card;
      obj.question = this.quizQuestion;
      obj.questiontype = 'MCQ';
      //save data here

      this.quizServiceService.createQuestion(obj).subscribe({
        next: (data) => {
          this.router.navigate(['/quizDashboard']);
        },
        error: (err) => {
          console.log('err: ', err);
        },
      });
    } else {
      this.isSaveDisabled = true;
    }
  }
}
