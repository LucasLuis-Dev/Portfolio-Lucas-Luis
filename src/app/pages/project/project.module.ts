import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectDetailsComponent } from './card-project-details/card-project-details.component';
import { ArrowComponent } from 'src/app/components/arrow/arrow.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    CardProjectDetailsComponent,
    ArrowComponent,
  
  ],
 
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectModule { }
