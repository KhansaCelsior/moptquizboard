import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizAdminRoutingModule } from './quiz-admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user/user.component';
import { QuizComponent } from './quiz/quiz.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizGeneratorComponent } from './quiz-generator/quiz-generator.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    QuizComponent,
    LeaderboardComponent,
    QuizGeneratorComponent,
    QuizDashboardComponent],
  imports: [
    CommonModule,
    QuizAdminRoutingModule,
    SharedModule
  ],
  exports: [
    AdminComponent,
    UserComponent,
    QuizComponent,
    QuizGeneratorComponent,
    LeaderboardComponent,
    QuizDashboardComponent

  ]
})
export class QuizAdminModule { }
