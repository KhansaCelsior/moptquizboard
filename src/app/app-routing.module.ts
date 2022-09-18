import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { AdminComponent } from './modules/quiz-admin/admin/admin.component';
import { AuthGuardService } from './core/guards/authguards';
import { QuizComponent } from './modules/quiz-admin/quiz/quiz.component';
import { UserComponent } from './modules/quiz-admin/user/user.component';
import { LeaderboardComponent } from './modules/quiz-admin/leaderboard/leaderboard.component';
import { QuizGeneratorComponent } from './modules/quiz-admin/quiz-generator/quiz-generator.component';
import { QuizDashboardComponent } from './modules/quiz-admin/quiz-dashboard/quiz-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      path: 'login',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      path: 'register',
    },
  },
  { path: 'quiz', component: QuizComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'quizDashboard', component: QuizDashboardComponent },
  { path: 'quizGenerate', component: QuizGeneratorComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'dashboard',
    component: AdminComponent,
    // canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
