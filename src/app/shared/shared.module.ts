import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
const primngModules = [CheckboxModule,ButtonModule,DialogModule,InputTextModule
,FormsModule,TagModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primngModules
  ],
  exports:[primngModules]
})
export class SharedModule { }
