import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    TimelineComponent,
    AboutComponent,

  ],
  exports: [
    TimelineComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutMeModule { }
