import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizAdminRoutingModule } from './quiz-admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user/user.component';
import { QuizComponent } from './quiz/quiz.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    QuizComponent,
    LeaderboardComponent],
  imports: [
    CommonModule,
    QuizAdminRoutingModule,
    SharedModule
  ],
  exports: [AdminComponent, UserComponent, QuizComponent, LeaderboardComponent]
})
export class QuizAdminModule { }
