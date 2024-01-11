import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    CardProjectComponent,
  ],
  exports: [
    CardProjectComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ProjectsModule { }
