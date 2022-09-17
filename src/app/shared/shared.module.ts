import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';

const primngModules = [CheckboxModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primngModules
  ],
  exports:[primngModules]
})
export class SharedModule { }
