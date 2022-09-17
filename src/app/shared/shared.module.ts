import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import {CardModule} from 'primeng/card';
const primngModules = [CheckboxModule,ButtonModule,DialogModule,InputTextModule
,FormsModule,TagModule,CardModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primngModules
  ],
  exports:[primngModules]
})
export class SharedModule { }
