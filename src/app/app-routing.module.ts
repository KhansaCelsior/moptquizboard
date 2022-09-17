import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { AdminComponent } from './modules/quiz-admin/admin/admin.component';
import { AuthGuardService } from './core/guards/authguards';
import { QuizComponent } from './modules/quiz-admin/quiz/quiz.component';
import { UserComponent } from './modules/quiz-admin/user/user.component';
import { LeaderboardComponent } from './modules/quiz-admin/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'user', component: UserComponent },
  {
    path: 'dashboard', component: AdminComponent,
    // canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
