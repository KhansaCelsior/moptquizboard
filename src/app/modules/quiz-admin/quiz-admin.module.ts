import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizAdminRoutingModule } from './quiz-admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [AdminComponent,UserComponent],
  imports: [
    CommonModule,
    QuizAdminRoutingModule, 
    SharedModule   
  ],
  exports:[AdminComponent,UserComponent]
})
export class QuizAdminModule { }
