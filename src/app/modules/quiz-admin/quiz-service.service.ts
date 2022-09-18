import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { quizData } from './quiz/quiz.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class QuizServiceService {
  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get(
      environment.API_BASEURL + 'category'
    );
  }
  getQuizById(id: number): Observable<any> {
    return this.http.get(
      environment.API_BASEURL + 'quiz/' + id
    );
  }
  createQuiz(quizData: any): Observable<any> {
    return this.http.post(
      environment.API_BASEURL + 'quiz',
      quizData,
      httpOptions
    );
  }
  updateQuiz(quizData: any): Observable<any> {
    return this.http.patch(
      environment.API_BASEURL + 'quiz',
      quizData,
      httpOptions
    );
  }
  // login(userLoginDetails: any): Observable<any> {
  //   console.log('username: ', userLoginDetails);
  //   return this.http.post(
  //     environment.API_BASEURL + 'login',
  //     userLoginDetails,
  //     httpOptions
  //   );
  // }

  createQuestion(questionData: any): Observable<any> {
    return this.http.post(
      environment.API_BASEURL + 'quiz/question',
      questionData,
      httpOptions
    );
  }
}



