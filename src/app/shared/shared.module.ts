import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
const primngModules = [CheckboxModule, ButtonModule, DialogModule, InputTextModule
  , FormsModule, InputTextareaModule, TagModule, CardModule, TableModule, RadioButtonModule, PanelModule]

const components = [SidenavigationComponent];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    primngModules
  ],
  exports: [components, primngModules]
})
export class SharedModule { }
