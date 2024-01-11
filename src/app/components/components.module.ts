import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ArrowToTopComponent } from './arrow-to-top/arrow-to-top.component';
import { LoaderComponent } from './loader/loader.component';
import { FloatingContactComponent } from './floating-contact/floating-contact.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ArrowToTopComponent,
    LoaderComponent,
    FloatingContactComponent
  ],
  exports:[
    ButtonComponent,
    ArrowToTopComponent,
    LoaderComponent,
    FloatingContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
